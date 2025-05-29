
import { useNavigate, Link } from "react-router-dom"
import { Button } from "../ui/Button"
import { LogOut, Home, Menu } from "lucide-react"

interface AdminNavbarProps {
  onMenuClick: () => void
}

export function AdminNavbar({ onMenuClick }: AdminNavbarProps) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    navigate("/")
  }

  return (
    <nav className="bg-[#651C32] text-white sticky top-0 z-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="lg:hidden text-white hover:bg-[#FAEDE2] hover:text-[#651C32] p-2"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Link to="/admin/dashboard" className="text-lg sm:text-xl font-serif font-bold truncate">
              Walnuts Admin
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-white hover:bg-[#FAEDE2] hover:text-[#651C32]">
                <Home className="w-4 h-4 mr-2" />
                View Site
              </Button>
            </Link>
            <Link to="/" className="sm:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:bg-[#FAEDE2] hover:text-[#651C32] p-2">
                <Home className="w-4 h-4" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-white hover:bg-[#FAEDE2] hover:text-[#651C32] hidden sm:flex"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-white hover:bg-[#FAEDE2] hover:text-[#651C32] sm:hidden p-2"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
