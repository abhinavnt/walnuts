import { useNavigate, Link } from "react-router-dom"
import { Button } from "../ui/Button"
import { LogOut, Home } from "lucide-react"

export function AdminNavbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    navigate("/")
  }

  return (
    <nav className="bg-[#651C32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/admin/dashboard" className="text-xl font-serif font-bold">
              Walnuts Admin
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-[#FAEDE2] hover:text-[#651C32]">
                <Home className="w-4 h-4 mr-2" />
                View Site
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-white hover:bg-[#FAEDE2] hover:text-[#651C32]"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
