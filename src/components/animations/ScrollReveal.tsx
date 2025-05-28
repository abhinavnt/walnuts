"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  distance = 60,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.3,
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: distance,
        scale: 0.95,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
        type: "tween",
      }}
    >
      {children}
    </motion.div>
  )
}
