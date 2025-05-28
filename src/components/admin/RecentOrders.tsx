import { Card } from "../ui/Card"

const recentOrders = [
  { id: "#1234", customer: "John Doe", product: "Mixed Nuts", amount: "₹850", status: "Completed" },
  { id: "#1235", customer: "Jane Smith", product: "Dates Premium", amount: "₹450", status: "Processing" },
  { id: "#1236", customer: "Mike Johnson", product: "Cashew Nuts", amount: "₹750", status: "Shipped" },
  { id: "#1237", customer: "Sarah Wilson", product: "Dark Chocolate", amount: "₹250", status: "Pending" },
]

export function RecentOrders() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-[#651C32] mb-4">Recent Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Order ID</th>
              <th className="text-left py-2">Customer</th>
              <th className="text-left py-2">Product</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-3 font-medium">{order.id}</td>
                <td className="py-3">{order.customer}</td>
                <td className="py-3">{order.product}</td>
                <td className="py-3 font-semibold">{order.amount}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
