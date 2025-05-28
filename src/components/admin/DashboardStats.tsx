import { Package, Users, ShoppingCart, TrendingUp } from "lucide-react"
import { Card } from "../ui/Card"

const stats = [
  {
    title: "Total Products",
    value: "48",
    change: "+12%",
    icon: Package,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Total Orders",
    value: "1,234",
    change: "+23%",
    icon: ShoppingCart,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Customers",
    value: "856",
    change: "+18%",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Revenue",
    value: "₹45,678",
    change: "+15%",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-green-600">{stat.change} from last month</p>
            </div>
            <div className={`p-3 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
