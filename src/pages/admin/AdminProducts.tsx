
import { AdminLayout } from "../../components/admin/AdminLayout"
import { ProductList } from "../../components/admin/ProductList"
import { AddProductForm } from "../../components/admin/AddProductForm"
import { useState } from "react"
import { Button } from "../../components/ui/Button"

export function AdminProducts() {
  const [showAddForm, setShowAddForm] = useState(false)

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#651C32] mb-2">Products</h1>
            <p className="text-gray-600">Manage your store products</p>
          </div>
          <Button onClick={() => setShowAddForm(!showAddForm)}>{showAddForm ? "View Products" : "Add Product"}</Button>
        </div>

        {showAddForm ? <AddProductForm /> : <ProductList />}
      </div>
    </AdminLayout>
  )
}
