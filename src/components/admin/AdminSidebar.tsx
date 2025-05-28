import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Package, FolderOpen } from "lucide-react"

const menuItems = [
  { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/admin/products", label: "Products", icon: Package },
  { path: "/admin/categories", label: "Categories", icon: FolderOpen },
]

export function AdminSidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen">
      <nav className="p-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-[#651C32] text-white" : "text-gray-700 hover:bg-[#651C32]/10 hover:text-[#651C32]"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
