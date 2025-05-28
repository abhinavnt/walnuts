import { Star } from "lucide-react"
import { ScrollReveal } from "../animations/ScrollReveal"
import { StaggerContainer, itemVariants } from "../animations/StaggerContainer"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing quality dates and nuts! The freshness is unmatched. Will definitely order again.",
    avatar: "https://via.placeholder.com/60x60/651C32/FFFFFF?text=SJ",
  },
  {
    name: "Mohammed Ali",
    rating: 5,
    comment: "Best place for premium dry fruits. Fast delivery and excellent packaging. Highly recommended!",
    avatar: "https://via.placeholder.com/60x60/8B2635/FFFFFF?text=MA",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    comment: "Love their chocolate collection! Perfect for gifting and the quality is outstanding.",
    avatar: "https://via.placeholder.com/60x60/FAEDE2/651C32?text=PS",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAEDE2]/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#651C32]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#651C32]/10 text-[#651C32] rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#651C32] mb-6 leading-tight">
              What Our Customers
              <span className="block text-[#8B2635]">Say About Us</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <motion.div
                className="bg-[#FAEDE2] rounded-3xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </motion.div>
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
                <div className="font-semibold text-[#651C32] text-lg">{testimonial.name}</div>
              </motion.div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
