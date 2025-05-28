
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { ScrollReveal } from "../animations/ScrollReveal"
import { motion } from "framer-motion"

export function NewsletterSection() {
  return (
    <section className="py-24 bg-[#651C32] text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FAEDE2]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <ScrollReveal>
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
                Stay Connected
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                Stay Updated with Our
                <span className="block text-[#FAEDE2]">Latest Offers</span>
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Subscribe to our newsletter and be the first to know about new products, special discounts, and
                exclusive deals.
              </p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 border-0 rounded-full px-6 py-4"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#FAEDE2] text-[#651C32] hover:bg-white rounded-full px-8 py-4 font-semibold">
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>

            <p className="text-white/70 text-sm mt-6">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
