
import { useState } from "react"
import { Edit, Trash2 } from "lucide-react"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import { products } from "../../data/products"

export function ProductList() {
  const [productList, setProductList] = useState(products)

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProductList((prev) => prev.filter((product) => product.id !== id))
    }
  }

  const handleEdit = (id: number) => {
    alert(`Edit functionality for product ${id} would be implemented here`)
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-[#651C32] mb-4">Product Management</h3>
      <div className="space-y-4">
        {productList.map((product) => (
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
                onClick={() => handleDelete(product.id)}
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}

        {productList.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No products found. Add your first product to get started.
          </div>
        )}
      </div>
    </Card>
  )
}
