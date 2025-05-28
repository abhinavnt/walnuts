
import { Shield, Truck, Heart, Award } from "lucide-react"
import { ScrollReveal } from "../animations/ScrollReveal"
import { StaggerContainer, itemVariants } from "../animations/StaggerContainer"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Only the finest, handpicked products make it to our store",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery to your doorstep",
  },
  {
    icon: Heart,
    title: "100% Natural & Healthy",
    description: "No artificial additives, just pure natural goodness",
  },
  {
    icon: Award,
    title: "100% Replacement",
    description: "Complete satisfaction guaranteed or full replacement",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-[#FAEDE2] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#651C32]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#651C32]/10 text-[#651C32] rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#651C32] mb-6 leading-tight">
              What Makes Us
              <span className="block text-[#8B2635]">Special</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center group">
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-[#651C32] text-white rounded-2xl mb-6 group-hover:bg-[#8B2635] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="text-xl font-serif font-bold text-[#651C32] mb-3 group-hover:text-[#8B2635] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
