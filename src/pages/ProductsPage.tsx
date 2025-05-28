import { useState, useEffect } from "react"
import { ProductGrid } from "../components/products/ProductGrid"
import { ProductFilter } from "../components/products/ProductFilter"
import { Pagination } from "../components/products/Pagination"
import { products } from "../data/products"

export function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredProducts, setFilteredProducts] = useState(products)

    const productsPerPage = 6

    useEffect(() => {
        const filtered =
            selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

        setFilteredProducts(filtered)
        setCurrentPage(1)
    }, [selectedCategory])

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
    const startIndex = (currentPage - 1) * productsPerPage
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

    return (
        <main className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#651C32] mb-4">Our Products</h1>
                    <p className="text-gray-600">Discover our premium collection of dates, nuts, dry fruits, and chocolates</p>
                </div>

                <ProductFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

                <ProductGrid products={currentProducts} />

                {totalPages > 1 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                )}
            </div>
        </main>
    )
}
