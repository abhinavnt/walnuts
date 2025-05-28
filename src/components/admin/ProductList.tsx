import { useState, useEffect } from "react"
import { Edit, Trash2 } from "lucide-react"
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { ref, onValue, remove } from "firebase/database"
import { db } from "../../config/firebaseConfig"
import { toast } from "sonner"

// Interface for Product list items with ID
interface ProductListItem {
  id: string
  name: string
  price: string
  originalPrice?: string
  description: string
  categoryId: string
  tag: string
  image?: string
}

export function ProductList() {
  const [allProducts, setAllProducts] = useState<ProductListItem[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<ProductListItem | null>(null)
  const pageSize = 5

  // Fetch products from Firebase
  useEffect(() => {
    const productsRef = ref(db, "products")
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const productsList = Object.entries(data)
          .map(([id, product]) => ({
            id,
            ...(product as Omit<ProductListItem, "id">),
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
        setAllProducts(productsList)
      } else {
        setAllProducts([])
      }
    })
    return () => unsubscribe()
  }, [])

  // Adjust currentPage if it exceeds total pages (e.g., after deletions)
  useEffect(() => {
    const totalPages = Math.ceil(allProducts.length / pageSize)
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages)
    } else if (totalPages === 0) {
      setCurrentPage(1)
    }
  }, [allProducts, currentPage, pageSize])

  // Calculate products for the current page
  const indexOfLastProduct = currentPage * pageSize
  const indexOfFirstProduct = indexOfLastProduct - pageSize
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(allProducts.length / pageSize)

  const handleDeleteClick = (product: ProductListItem) => {
    setProductToDelete(product)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!productToDelete) return

    try {
      await remove(ref(db, `products/${productToDelete.id}`))
      toast.success("Product deleted successfully")
      setDeleteDialogOpen(false)
      setProductToDelete(null)
    } catch (error) {
      console.error("Error deleting product:", error)
      toast.error("Failed to delete product")
    }
  }

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false)
    setProductToDelete(null)
  }

  const handleEdit = (id: string) => {
    alert(`Edit functionality for product ${id} would be implemented here`)
  }

  return (
    <>
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-[#651C32] mb-4">Product Management</h3>
        <div className="space-y-4">
          {currentProducts.map((product) => (
            <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-[#651C32]">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{product.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                  <span className="text-xs bg-[#651C32] text-white px-2 py-1 rounded">{product.tag}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(product.id)}>
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDeleteClick(product)}
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          {allProducts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No products found. Add your first product to get started.
            </div>
          )}
        </div>
        {allProducts.length > 0 && (
          <div className="flex justify-between mt-4">
            <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{productToDelete?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleDeleteCancel}>
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
