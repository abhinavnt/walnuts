
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, User } from "lucide-react"
import { Button } from "../ui/Button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-[#651C32] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl text-[#f3e8de] text- font-serif font-bold">Walnuts</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-[#FAEDE2] transition-colors ${isActive("/") ? "text-[#FAEDE2]" : ""}`}>
              Home
            </Link>
            <Link
              to="/products"
              className={`hover:text-[#FAEDE2] transition-colors ${isActive("/products") ? "text-[#FAEDE2]" : ""}`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#FAEDE2] transition-colors ${isActive("/about") ? "text-[#FAEDE2]" : ""}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`hover:text-[#FAEDE2] transition-colors ${isActive("/contact") ? "text-[#FAEDE2]" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Admin Login & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/admin/login">
              <Button variant="ghost" size="sm" className="text-white hover:bg-[#FAEDE2] hover:text-[#651C32]">
                <User className="w-4 h-4" />
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#FAEDE2]/20">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`hover:text-[#FAEDE2] transition-colors ${isActive("/") ? "text-[#FAEDE2]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`hover:text-[#FAEDE2] transition-colors ${isActive("/products") ? "text-[#FAEDE2]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`hover:text-[#FAEDE2] transition-colors ${isActive("/about") ? "text-[#FAEDE2]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`hover:text-[#FAEDE2] transition-colors ${isActive("/contact") ? "text-[#FAEDE2]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
