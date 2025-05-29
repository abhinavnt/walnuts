
import type { ReactNode } from "react"
import { useState } from "react"
import { AdminNavbar } from "./AdminNavbar"
import { AdminSidebar } from "./AdminSidebar"

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAEDE2]">
      <AdminNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-h-screen">{children}</main>
      </div>
    </div>
  )
}
