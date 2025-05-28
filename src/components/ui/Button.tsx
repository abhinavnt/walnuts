
import type React from "react"
import { motion } from "framer-motion"

interface ButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function Button({
  variant = "default",
  size = "md",
  className = "",
  children,
  onClick,
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-[#651C32] text-white hover:bg-[#8B2635] focus:ring-[#651C32]",
    outline: "border border-[#651C32] text-[#651C32] hover:bg-[#651C32] hover:text-white focus:ring-[#651C32]",
    ghost: "text-[#651C32] hover:bg-[#651C32]/10 focus:ring-[#651C32]",
  }

  const sizes = {
    sm: "px-3 py-2 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl",
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
