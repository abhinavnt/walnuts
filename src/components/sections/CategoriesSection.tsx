
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "../animations/ScrollReveal"
import { StaggerContainer, itemVariants } from "../animations/StaggerContainer"
import dates from "../../assets/dates.png"
import nuts from "../../assets/nuts_card.png"
import dry_fruit from "../../assets/dry_fruit.png"
import { Link } from "react-router-dom"
const categories = [
  {
    name: "Dates",
    image: dates,
    description: "Premium quality dates from the finest farms",
    color: "from-amber-500 to-orange-600",
    count: "15+ Varieties",
  },
  {
    name: "Nuts",
    image: nuts,
    description: "Fresh and crunchy nuts for healthy snacking",
    color: "from-emerald-500 to-teal-600",
    count: "20+ Varieties",
  },
  {
    name: "Dry Fruits",
    image: dry_fruit,
    description: "Nutritious dry fruits packed with goodness",
    color: "from-purple-500 to-pink-600",
    count: "12+ Varieties",
  },
]

export function CategoriesSection() {
  const ref = useRef(null)
  

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#FAEDE2] to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#651C32]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FAEDE2]/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#651C32]/10 text-[#651C32] rounded-full text-sm font-medium mb-4">
              Our Categories
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#651C32] mb-6 leading-tight">
              Discover Nature's
              <span className="block text-[#8B2635]">Finest Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our premium collection of nature's finest offerings, carefully selected and categorized for your
              convenience and delight.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link to={`/products`} className="group block">
                <motion.div
                  className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover  transition-transform duration-700"
                    />

                    {/* Floating Badge */}
                    {/* <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-sm font-semibold text-[#651C32]">{category.count}</span>
                    </motion.div> */}

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-[#651C32]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                    >
                      <motion.div
                        className="text-white text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-8 h-8 mx-auto mb-2" />
                        <span className="text-lg font-semibold">Explore {category.name}</span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <motion.h3
                      className="text-2xl font-serif font-bold text-[#651C32] mb-3 group-hover:text-[#8B2635] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category.name}
                    </motion.h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>

                    <motion.div
                      className="flex items-center text-[#651C32] font-semibold group-hover:text-[#8B2635] transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>View Products</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-[#651C32]/10 to-transparent rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-[#651C32] text-white rounded-full font-semibold text-lg shadow-xl hover:bg-[#8B2635] transition-colors"
              >
                View All categories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
