import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
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
      ease: "easeOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
}

const socialVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.3,
    },
  },
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <motion.h2
          className="text-3xl lg:text-4xl font-serif font-bold text-[#651C32] mb-6"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We'd love to hear from you. Reach out to us for premium nuts, dates, and chocolates that bring joy to every
          moment.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          variants={cardVariants}
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-[#651C32] to-[#8B2538] rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <MapPin className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h3 className="font-bold text-[#651C32] text-xl mb-3">Visit Our Store</h3>
              <p className="text-gray-600 leading-relaxed">
                Vc tower Opp kmo masjid near mpc hospital
                <br />
                <span className="font-semibold">Wayanad road Koduvally,</span>
                <br />
                673572
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          variants={cardVariants}
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-[#651C32] to-[#8B2538] rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <Phone className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h3 className="font-bold text-[#651C32] text-xl mb-3">Call Us</h3>
              <p className="text-gray-600 text-lg font-semibold">+91 6282026935</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 md:col-span-2 lg:col-span-1"
          variants={cardVariants}
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-[#651C32] to-[#8B2538] rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div variants={textVariants}>
              <h3 className="font-bold text-[#651C32] text-xl mb-3">Email Us</h3>
              <p className="text-gray-600 break-all">walnutdateschoclate@gmail.com</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-[#651C32] to-[#8B2538] rounded-3xl p-8 lg:p-12 text-white mt-16"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-bold text-2xl lg:text-3xl font-serif mb-4">Connect With Us</h3>
          <p className="text-white/90 text-lg">Follow us on social media for updates, offers, and delicious content</p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.a
            href="https://www.instagram.com/walnutskoduvally/"
            className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 transition-all duration-300 w-full sm:w-auto justify-center"
            variants={socialVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.div>
            <span className="font-semibold">@walnutskoduvally</span>
          </motion.a>
          <motion.a
            href="https://www.facebook.com/share/12GHaen8ozR/?mibextid=wwXIfr "
            className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 transition-all duration-300 w-full sm:w-auto justify-center"
            variants={socialVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            >
              <Facebook className="w-6 h-6" />
            </motion.div>
            <span className="font-semibold">Walnuts Koduvally</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}
