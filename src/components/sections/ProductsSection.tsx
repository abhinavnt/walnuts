
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Star } from "lucide-react"
import { ScrollReveal } from "../animations/ScrollReveal"
import { StaggerContainer, itemVariants } from "../animations/StaggerContainer"

const products = [
  {
    id: 1,
    name: "Libyan Dark Dates",
    price: 450,
    originalPrice: 500,
    image: "https://via.placeholder.com/300x300/8B4513/FFFFFF?text=Dates",
    category: "dates",
    tag: "Premium Quality",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Mixed Dry Fruits & Nuts",
    price: 800,
    originalPrice: 900,
    image: "https://via.placeholder.com/300x300/D2691E/FFFFFF?text=Mixed+Nuts",
    category: "nuts",
    tag: "Best Seller",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "American Almond",
    price: 650,
    originalPrice: 700,
    image: "https://via.placeholder.com/300x300/CD853F/FFFFFF?text=Almonds",
    category: "nuts",
    tag: "Fresh Stock",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Golden Raisins",
    price: 350,
    originalPrice: 400,
    image: "https://via.placeholder.com/300x300/DAA520/FFFFFF?text=Raisins",
    category: "dry-fruits",
    tag: "Organic",
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 5,
    name: "Cashew Nuts",
    price: 750,
    originalPrice: 800,
    image: "https://via.placeholder.com/300x300/F5DEB3/000000?text=Cashews",
    category: "nuts",
    tag: "Premium",
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 6,
    name: "Egyptian Brown Dates",
    price: 400,
    originalPrice: 450,
    image: "https://via.placeholder.com/300x300/A0522D/FFFFFF?text=Brown+Dates",
    category: "dates",
    tag: "Sweet & Soft",
    rating: 4.9,
    reviews: 167,
  },
]

const categories = [
  { id: "all", name: "All Products", color: "bg-[#651C32]" },
  { id: "dates", name: "Dates", color: "bg-amber-500" },
  { id: "nuts", name: "Nuts", color: "bg-emerald-500" },
  { id: "dry-fruits", name: "Dry Fruits", color: "bg-purple-500" },
]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FAEDE2]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#651C32]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#651C32]/10 text-[#651C32] rounded-full text-sm font-medium mb-4">
              Featured Products
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#651C32] mb-6 leading-tight">
              Our Premium
              <span className="block text-[#8B2635]">Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              All items in stock are 100% organic and premium quality. We take pride in sourcing the finest products for
              our valued customers.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.color} text-white shadow-lg scale-105`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  layout
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants} layout className="group">
              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <motion.span
                      className="bg-[#651C32] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      {product.tag}
                    </motion.span>
                  </div>

                  <motion.button
                    className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </motion.button>

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <motion.div
                      className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    >
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.div
                    className="flex items-center space-x-1 mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-serif font-bold text-[#651C32] mb-3 group-hover:text-[#8B2635] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {product.name}
                  </motion.h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <motion.span
                        className="text-2xl font-bold text-[#651C32]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      >
                        ₹{product.price}
                      </motion.span>
                      {product.originalPrice > product.price && (
                        <motion.span
                          className="text-lg text-gray-500 line-through"
                          initial={{ opacity: 0, x: 10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        >
                          ₹{product.originalPrice}
                        </motion.span>
                      )}
                    </div>

                    <motion.div
                      className="text-[#651C32] font-semibold hover:text-[#8B2635] transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      View Details
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#651C32]/10 to-transparent rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="border-2 border-[#651C32] text-[#651C32] hover:bg-[#651C32] hover:text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300">
                Explore All Products
              </button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
