import type React from "react"
import { useState } from "react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Card } from "../ui/Card"

import { ref, push } from "firebase/database"
import { db } from "../../config/firebaseConfig"
import { toast } from "sonner"

export function AddCategoryForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await push(ref(db, "categories"), formData)
      toast.success(`Category "${formData.name}" added successfully!`)
      setFormData({ name: "", description: "" })
    } catch (error) {
      console.error("Error adding category:", error)
      toast.error("Failed to add category. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-4 sm:p-6 w-full max-w-md mx-auto sm:mx-0">
      <h3 className="text-lg font-semibold text-[#651C32] mb-4">Add New Category</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700 mb-2">
            Category Name
          </label>
          <Input
            id="categoryName"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="e.g., Dates, Nuts, Chocolates"
            required
          />
        </div>

        <div>
          <label htmlFor="categoryDescription" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="categoryDescription"
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            placeholder="Describe the category..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#651C32] focus:border-transparent transition-colors resize-none"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Category"}
        </Button>
      </form>
    </Card>
  )
}
