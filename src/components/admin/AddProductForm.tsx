
import type React from "react"

import { useState } from "react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Card } from "../ui/Card"
import { Upload, X } from "lucide-react"

const categories = [
  { value: "dates", label: "Dates" },
  { value: "nuts", label: "Nuts" },
  { value: "dry-fruits", label: "Dry Fruits" },
  { value: "chocolates", label: "Chocolates" },
]

export function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    originalPrice: "",
    description: "",
    category: "",
    tag: "",
  })
  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result && images.length < 3) {
            setImages((prev) => [...prev, e.target!.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      alert(`Product "${formData.name}" added successfully!`)
      setFormData({
        name: "",
        price: "",
        originalPrice: "",
        description: "",
        category: "",
        tag: "",
      })
      setImages([])
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <Card className="p-6 max-w-2xl">
      <h3 className="text-lg font-semibold text-[#651C32] mb-4">Add New Product</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="e.g., Premium Dates"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#651C32] focus:border-transparent transition-colors"
              required
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Price (₹)
            </label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
              placeholder="450"
              required
            />
          </div>

          <div>
            <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700 mb-2">
              Original Price (₹)
            </label>
            <Input
              id="originalPrice"
              type="number"
              value={formData.originalPrice}
              onChange={(e) => handleInputChange("originalPrice", e.target.value)}
              placeholder="500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-2">
            Product Tag
          </label>
          <Input
            id="tag"
            type="text"
            value={formData.tag}
            onChange={(e) => handleInputChange("tag", e.target.value)}
            placeholder="e.g., Premium Quality, Best Seller"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="Describe your product..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#651C32] focus:border-transparent transition-colors"
            required
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Product Images (Max 3)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
              disabled={images.length >= 3}
            />
            <label
              htmlFor="image-upload"
              className={`cursor-pointer ${images.length >= 3 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-600">
                {images.length >= 3 ? "Maximum 3 images allowed" : "Click to upload images"}
              </p>
            </label>
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Adding Product..." : "Add Product"}
        </Button>
      </form>
    </Card>
  )
}
