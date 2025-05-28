"use client"

import { useState } from "react"
import { AdminLayout } from "../../components/admin/AdminLayout"
import { ProductList } from "../../components/admin/ProductList"
import { ProductForm } from "../../components/admin/ProductForm"
import { Button } from "../../components/ui/Button"

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

export function AdminProducts() {
  const [viewMode, setViewMode] = useState<"list" | "add" | "edit">("list")
  const [editingProduct, setEditingProduct] = useState<ProductListItem | null>(null)

  const handleEditClick = (product: ProductListItem) => {
    setEditingProduct(product)
    setViewMode("edit")
  }

  const handleBackToList = () => {
    setViewMode("list")
    setEditingProduct(null)
  }

  return (
    <AdminLayout>
      <div className="space-y-6 sm:space-y-8">
        {viewMode === "list" ? (
          <>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#651C32] mb-2">Products</h1>
                <p className="text-gray-600 text-sm sm:text-base">Manage your store products</p>
              </div>
              <Button onClick={() => setViewMode("add")} className="w-full sm:w-auto">
                Add Product
              </Button>
            </div>
            <ProductList onEditClick={handleEditClick} />
          </>
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#651C32]">
                {viewMode === "add" ? "Add Product" : "Edit Product"}
              </h2>
              <Button onClick={handleBackToList} className="w-full sm:w-auto">
                Back to List
              </Button>
            </div>
            <ProductForm
              productToEdit={viewMode === "edit" ? editingProduct : null}
              onSubmitSuccess={handleBackToList}
            />
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
