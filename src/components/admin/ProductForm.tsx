import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Card } from "../ui/Card";
import { X } from "lucide-react";
import { ref, onValue, push, set } from 'firebase/database';
import { db } from "../../config/firebaseConfig";
import { toast } from "sonner";

interface ProductListItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  categoryId: string;
  tag: string;
  image?: string;
}

interface ProductFormProps {
  productToEdit?: ProductListItem | null;
  onSubmitSuccess?: () => void;
}

export function ProductForm({ productToEdit, onSubmitSuccess }: ProductFormProps) {
  const isEditMode = !!productToEdit;
  const [formData, setFormData] = useState({
    name: productToEdit?.name || "",
    price: productToEdit?.price || "",
    originalPrice: productToEdit?.originalPrice || "",
    description: productToEdit?.description || "",
    categoryId: productToEdit?.categoryId || "",
    tag: productToEdit?.tag || "",
  });
  const [image, setImage] = useState<string | null>(productToEdit?.image || null);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const categoriesRef = ref(db, 'categories');
    const unsubscribe = onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const categoriesList = Object.entries(data).map(([id, category]) => ({
          id,
          name: (category as { name: string }).name,
        }));
        setCategories(categoriesList);
      } else {
        setCategories([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const openUploadWidget = () => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    (window as any).cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        multiple: false,
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          setImage(result.info.secure_url);
        }
      }
    ).open();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const productData = {
        ...formData,
        image: image || '',
      };

      if (isEditMode) {
        const productRef = ref(db, `products/${productToEdit!.id}`);
        await set(productRef, productData);
        toast.success(`Product "${formData.name}" updated successfully!`);
      } else {
        await push(ref(db, 'products'), productData);
        toast.success(`Product "${formData.name}" added successfully!`);
      }

      onSubmitSuccess?.();
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Failed to save product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6 max-w-2xl">
      <h3 className="text-lg font-semibold text-[#651C32] mb-4">
        {isEditMode ? "Edit Product" : "Add New Product"}
      </h3>
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
              value={formData.categoryId}
              onChange={(e) => handleInputChange("categoryId", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#651C32] focus:border-transparent transition-colors"
              required
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
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
          <label className="block text-sm font-medium text-gray-700">Product Image</label>
          <button
            type="button"
            onClick={openUploadWidget}
            className="px-4 py-2 bg-[#651C32] text-white rounded-lg hover:bg-[#4a1423] transition-colors"
          >
            Upload Image
          </button>
          {image && (
            <div className="relative inline-block">
              <img src={image} alt="Product" className="w-32 h-32 object-cover rounded-lg" />
              <button
                type="button"
                onClick={() => setImage(null)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (isEditMode ? "Updating Product..." : "Adding Product...") : (isEditMode ? "Update Product" : "Add Product")}
        </Button>
      </form>
    </Card>
  );
}