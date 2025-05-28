

import { AdminLayout } from "../../components/admin/AdminLayout"
import { CategoryList } from "../../components/admin/CategoryList"
import { AddCategoryForm } from "../../components/admin/AddCategoryForm"
import { useState } from "react"
import { Button } from "../../components/ui/Button"

export function AdminCategories() {
  const [showAddForm, setShowAddForm] = useState(false)

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#651C32] mb-2">Categories</h1>
            <p className="text-gray-600">Manage your product categories</p>
          </div>
          <Button onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? "View Categories" : "Add Category"}
          </Button>
        </div>

        {showAddForm ? <AddCategoryForm /> : <CategoryList />}
      </div>
    </AdminLayout>
  )
}
