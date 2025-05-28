
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "../ui/Button"
import { TrendingUp, Users, Award } from "lucide-react"
import { ScrollReveal } from "../animations/ScrollReveal"
import { StaggerContainer, itemVariants } from "../animations/StaggerContainer"
import img from "../../assets/nuts.png"
const stats = [
  { icon: TrendingUp, value: "5+", label: "Years Experience", color: "text-green-600" },
  { icon: Users, value: "50", label: "Product Varieties", color: "text-blue-600" },
  { icon: Award, value: "1000+", label: "Happy Customers", color: "text-purple-600" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FAEDE2]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#651C32]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-[#651C32]/20 to-[#FAEDE2]/40 rounded-3xl blur-xl"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src={img}
                  alt="About Walnuts store"
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>

              {/* Floating Stats Cards */}
              <StaggerContainer className="absolute inset-0">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="absolute bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                    style={{
                      top: `${20 + index * 25}%`,
                      right: index % 2 === 0 ? "-10%" : "auto",
                      left: index % 2 === 1 ? "-10%" : "auto",
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-[#651C32]">{stat.value}</div>
                        <div className="text-xs text-gray-600 whitespace-nowrap">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* Content Section */}
          <div className="space-y-8">
            <ScrollReveal delay={0.3}>
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-2 bg-[#651C32]/10 text-[#651C32] rounded-full text-sm font-medium mb-4">
                    Our Story
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#651C32] leading-tight">
                    Crafting Excellence in Every
                    <span className="block text-[#8B2635]">Bite</span>
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Walnuts, we believe in bringing you nature's finest treasures. Our carefully curated selection of
                  premium dates, nuts, and chocolates represents the perfect harmony of{" "}
                  <span className="text-[#651C32] font-semibold">taste, quality, and nutrition.</span>
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Each product is handpicked to ensure you experience the best nature has to offer. From the sweetest
                  Medjool dates to the crunchiest almonds and the richest chocolates, we are committed to delivering
                  excellence in every bite.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-[#651C32] hover:bg-[#651C32]/90 text-white px-8 py-6 rounded-full font-semibold shadow-lg"
                  >
                    Discover Our Story
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#651C32] text-[#651C32] hover:bg-[#651C32] hover:text-white px-8 py-6 rounded-full font-semibold"
                  >
                    View Products
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Achievement Highlights */}
            <ScrollReveal delay={0.6}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-[#651C32] mb-1"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
