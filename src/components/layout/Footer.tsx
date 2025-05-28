import { Link } from "react-router-dom"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#651C32] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Walnuts</h3>
            <p className="text-white/80 text-sm">
              Premium quality dates, nuts, and chocolates for a healthier lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-white/80 hover:text-white">
                Home
              </Link>
              <Link to="/products" className="block text-white/80 hover:text-white">
                Products
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-white">
                About
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <div className="space-y-2 text-sm">
              <Link to="/products?category=dates" className="block text-white/80 hover:text-white">
                Dates
              </Link>
              <Link to="/products?category=nuts" className="block text-white/80 hover:text-white">
                Nuts
              </Link>
              <Link to="/products?category=dry-fruits" className="block text-white/80 hover:text-white">
                Dry Fruits
              </Link>
              <Link to="/products?category=chocolates" className="block text-white/80 hover:text-white">
                Chocolates
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-white/80">VC Tower, Near Sanji Hypermarket, Opp. KMO, Koduvally</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-white/80">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-white/80">info@walnuts.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; 2024 Walnuts - Dates, Nuts and Chocolates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
