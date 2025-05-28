import type { ReactNode } from "react"
import { AdminNavbar } from "./AdminNavbar"
import { AdminSidebar } from "./AdminSidebar"

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FAEDE2]">
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
