
import { Heart, Star } from "lucide-react"
import { motion } from "framer-motion"
import type { Product } from "../../data/products"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products found in this category.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="relative h-64">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#651C32] text-white px-3 py-1 rounded-full text-xs font-medium">{product.tag}</span>
            </div>
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
            </button>

            {/* Discount Badge */}
            {product.originalPrice > product.price && (
              <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </div>
            )}
          </div>

          <div className="p-6">
            {product.rating && (
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating!) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            )}

            <h3 className="text-lg font-semibold text-[#651C32] mb-2 group-hover:text-[#8B2635] transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{product.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-[#651C32]">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
              </div>

              <div className="text-[#651C32] font-semibold hover:text-[#8B2635] transition-colors cursor-pointer">
                View Details
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
