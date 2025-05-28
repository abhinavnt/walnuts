import { AdminLayout } from "../../components/admin/AdminLayout"
import { DashboardStats } from "../../components/admin/DashboardStats"
import { RecentOrders } from "../../components/admin/RecentOrders"

export function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#651C32] mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
        </div>

        <DashboardStats />
        <RecentOrders />
      </div>
    </AdminLayout>
  )
}
