"use client"

import { useState, useEffect } from "react"
import { Trash2, Edit } from "lucide-react"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { ref, onValue, remove } from "firebase/database"
import { db } from "../../config/firebaseConfig"
import { toast } from "sonner"

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

interface ProductListProps {
  onEditClick: (product: ProductListItem) => void
}

export function ProductList({ onEditClick }: ProductListProps) {
  const [allProducts, setAllProducts] = useState<ProductListItem[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<ProductListItem | null>(null)
  const pageSize = 5

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

  useEffect(() => {
    const totalPages = Math.ceil(allProducts.length / pageSize)
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages)
    } else if (totalPages === 0) {
      setCurrentPage(1)
    }
  }, [allProducts, currentPage, pageSize])

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

  return (
    <>
      <Card className="p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-[#651C32] mb-4">Product Management</h3>
        <div className="space-y-4">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 border rounded-lg"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full sm:w-20 h-48 sm:h-20 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#651C32] truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                  <span className="text-xs bg-[#651C32] text-white px-2 py-1 rounded whitespace-nowrap">
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col gap-2 justify-end sm:justify-start flex-shrink-0">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onEditClick(product)}
                  className="flex-1 sm:flex-none"
                >
                  <Edit className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Edit</span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDeleteClick(product)}
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white flex-1 sm:flex-none"
                >
                  <Trash2 className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Delete</span>
                </Button>
              </div>
            </div>
          ))}
          {allProducts.length === 0 && (
            <div className="text-center py-8 sm:py-12 text-gray-500">
              <p className="text-sm sm:text-base">No products found.</p>
              <p className="text-xs sm:text-sm mt-1">Add your first product to get started.</p>
            </div>
          )}
        </div>
        {allProducts.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-full sm:w-auto"
            >
              Previous
            </Button>
            <span className="text-sm text-gray-600 order-first sm:order-none">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-full sm:w-auto"
            >
              Next
            </Button>
          </div>
        )}
      </Card>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="mx-4">
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription className="break-words">
              Are you sure you want to delete "{productToDelete?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2">
            <Button variant="outline" onClick={handleDeleteCancel} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm} className="w-full sm:w-auto">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
