
import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/Input"
import { Card } from "../../components/ui/Card"

export function AdminLoginPage() {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (credentials.username === "walnutstore" && credentials.password === "walnut123") {
        localStorage.setItem("adminLoggedIn", "true")
        navigate("/admin/products")
      } else {
        alert("Invalid credentials. Use admin/admin123 for demo.")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#FAEDE2] flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif font-bold text-[#651C32] mb-2">Admin Login</h1>
          <p className="text-gray-600">Access the admin dashboard to manage products and categories</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
              placeholder="Enter password"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
          <strong>Demo Credentials:</strong>
          <br />
          Username: admin
          <br />
          Password: admin123
        </div> */}
      </Card>
    </div>
  )
}
