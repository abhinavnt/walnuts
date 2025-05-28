"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
}

export function StaggerContainer({ children, staggerDelay = 0.15, className = "" }: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.2,
  })

  const customVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}
