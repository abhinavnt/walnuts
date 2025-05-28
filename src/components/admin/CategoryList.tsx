
import { useState } from "react"
import { Edit, Trash2 } from "lucide-react"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"

const initialCategories = [
  { id: 1, name: "Dates", description: "Premium quality dates", productCount: 15 },
  { id: 2, name: "Nuts", description: "Fresh and crunchy nuts", productCount: 20 },
  { id: 3, name: "Dry Fruits", description: "Nutritious dry fruits", productCount: 12 },
  { id: 4, name: "Chocolates", description: "Rich and delicious chocolates", productCount: 8 },
]

export function CategoryList() {
  const [categories, setCategories] = useState(initialCategories)

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((category) => category.id !== id))
    }
  }

  const handleEdit = (id: number) => {
    alert(`Edit functionality for category ${id} would be implemented here`)
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-[#651C32] mb-4">Category Management</h3>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold text-[#651C32]">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
              <p className="text-xs text-gray-500">{category.productCount} products</p>
            </div>

            <div className="flex space-x-2">
              <Button size="sm" variant="outline" onClick={() => handleEdit(category.id)}>
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDelete(category.id)}
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}

        {categories.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No categories found. Add your first category to get started.
          </div>
        )}
      </div>
    </Card>
  )
}
