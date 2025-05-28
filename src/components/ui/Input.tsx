import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function Input({ className = "", ...props }: InputProps) {
  const baseClasses =
    "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#651C32] focus:border-transparent transition-colors"

  return <input className={`${baseClasses} ${className}`} {...props} />
}
