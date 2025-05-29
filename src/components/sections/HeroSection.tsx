import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { Star, Award, Truck, Shield } from "lucide-react"
import img from "../../assets/ChatGPT Image May 27, 2025, 05_21_58 PM.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#651C32] via-[#8B2635] to-[#651C32] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#FAEDE2]/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-[#FAEDE2]/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-[#FAEDE2]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FAEDE2]/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium">Premium Quality Since 2019</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Nature's
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-[#FAEDE2] to-white bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Sweetest &
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Most Crunchy
                </motion.span>
                <motion.span
                  className="block text-[#FAEDE2]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Delights
                </motion.span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl">
              Premium quality dates, nuts, and chocolates sourced from the finest farms. Experience the perfect blend of
              <span className="text-[#FAEDE2] font-semibold"> taste, nutrition, and natural goodness.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="border-2 border-white text-white text-lg px-8 py-6 rounded-full font-semibold shadow-2xl"
                >
                  Explore Products
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white  hover:text-[#651C32] text-lg px-8 py-6 rounded-full font-semibold backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {[
                { icon: Award, text: "Premium Quality" },
                { icon: Truck, text: "Fast Delivery" },
                { icon: Shield, text: "100% Natural" },
                { icon: Star, text: "5★ Rated" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-white/80"
                  whileHover={{ scale: 1.1, color: "#FAEDE2" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-radial from-[#FAEDE2]/60 to-[#651C32]/60 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src={img}
                  alt="Premium nuts and dates"
                  className="relative rounded-3xl  w-full h-auto"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-8 -right-8 bg-[#FAEDE2] text-[#651C32] p-4 rounded-2xl shadow-xl"
              animate={{
                y: [-5, 5, -5],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs font-medium">Natural</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-white text-[#651C32] p-4 rounded-2xl shadow-xl"
              animate={{
                y: [5, -5, 5],
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-xs font-medium">Happy Customers</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
