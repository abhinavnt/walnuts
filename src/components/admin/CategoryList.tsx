
import { useState, useEffect } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"

import { ref, onValue, remove } from "firebase/database"
import { db } from "../../config/firebaseConfig"

interface Category {
  id: string
  name: string
  description: string
  productCount: number
}

export function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([])
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean
    categoryId: string
    categoryName: string
  }>({
    isOpen: false,
    categoryId: "",
    categoryName: "",
  })
  const [isDeleting, setIsDeleting] = useState(false)

  // Fetch categories from Firebase on component mount
  useEffect(() => {
    const categoriesRef = ref(db, "categories")

    // Listen for real-time updates
    const unsubscribe = onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        // Convert Firebase object to array of categories
        const categoryList: Category[] = Object.entries(data).map(([key, value]: [string, any]) => ({
          id: key,
          name: value.name,
          description: value.description,
          productCount: value.productCount || 0,
        }))
        setCategories(categoryList)
      } else {
        setCategories([]) // Clear categories if no data exists
      }
    })

    // Cleanup listener on component unmount
    return () => unsubscribe()
  }, [])

  const openDeleteModal = (id: string, name: string) => {
    setDeleteModal({
      isOpen: true,
      categoryId: id,
      categoryName: name,
    })
  }

  const closeDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      categoryId: "",
      categoryName: "",
    })
  }

  const handleDelete = async () => {
    if (!deleteModal.categoryId) return

    setIsDeleting(true)
    try {
      const categoryRef = ref(db, `categories/${deleteModal.categoryId}`)
      await remove(categoryRef)
      console.log(`Category ${deleteModal.categoryId} deleted successfully`)
      closeDeleteModal()
    } catch (error) {
      console.error("Error deleting category:", error)
      alert("Failed to delete category. Please try again.")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <Card className="p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-[#651C32] mb-4">Category Management</h3>
        <div className="space-y-3 sm:space-y-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-4"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#651C32] truncate">{category.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 sm:line-clamp-1">{category.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {category.productCount} {category.productCount === 1 ? "product" : "products"}
                </p>
              </div>

              <div className="flex justify-end sm:justify-start">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => openDeleteModal(category.id, category.name)}
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-auto"
                >
                  <Trash2 className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Delete</span>
                </Button>
              </div>
            </div>
          ))}

          {categories.length === 0 && (
            <div className="text-center py-8 sm:py-12 text-gray-500">
              <p className="text-sm sm:text-base">No categories found.</p>
              <p className="text-xs sm:text-sm mt-1">Add your first category to get started.</p>
            </div>
          )}
        </div>
      </Card>

      {/* Delete Confirmation Modal */}
      <Dialog open={deleteModal.isOpen} onOpenChange={closeDeleteModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-600">Delete Category</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Are you sure you want to delete the category{" "}
              <span className="font-semibold text-gray-900">"{deleteModal.categoryName}"</span>?
              <br />
              <span className="text-red-500 text-xs sm:text-sm mt-2 block">This action cannot be undone.</span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex  flex-col-reverse sm:flex-row gap-2 sm:gap-5">
            <Button variant="outline" onClick={closeDeleteModal} disabled={isDeleting} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button  onClick={handleDelete} disabled={isDeleting} className="w-full sm:w-auto">
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
