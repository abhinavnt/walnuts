import { useState, useEffect } from "react";
import { ProductGrid } from "../components/products/ProductGrid";
import { ProductFilter } from "../components/products/ProductFilter";
import { Pagination } from "../components/products/Pagination";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebaseConfig";

// Define the Product interface based on Firebase data
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  categoryId: string;
  tag: string;
  image?: string;
  rating?: number; // Optional, not currently in Firebase
  reviews?: number; // Optional, not currently in Firebase
}

// Define the Category interface
interface Category {
  id: string;
  name: string;
}

export function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Fetch data from Firebase
  useEffect(() => {
    // Fetch categories
    const categoriesRef = ref(db, "categories");
    const unsubscribeCategories = onValue(categoriesRef, (snapshot) => {
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

    // Fetch products
    const productsRef = ref(db, "products");
    const unsubscribeProducts = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsList = Object.entries(data).map(([id, product]) => {
          const p = product as {
            name: string;
            price: string;
            originalPrice?: string;
            description: string;
            categoryId: string;
            tag: string;
            image?: string;
          };
          return {
            id,
            name: p.name,
            price: parseFloat(p.price),
            originalPrice: p.originalPrice ? parseFloat(p.originalPrice) : undefined,
            description: p.description,
            categoryId: p.categoryId,
            tag: p.tag,
            image: p.image,
          };
        });
        setAllProducts(productsList);
      } else {
        setAllProducts([]);
      }
    });

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribeCategories();
      unsubscribeProducts();
    };
  }, []);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.categoryId === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#651C32] mb-4">Our Products</h1>
          <p className="text-gray-600">Discover our premium collection of dates, nuts, dry fruits, and chocolates</p>
        </div>

        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProductGrid products={currentProducts} />

        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>
    </main>
  );
}