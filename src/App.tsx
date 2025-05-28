import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { PrivateRoute } from "./components/auth/PrivateRoute"

// Public Pages
import { HomePage } from "./pages/HomePage"
import { ProductsPage } from "./pages/ProductsPage"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"

// Auth Pages
import { AdminLoginPage } from "./pages/auth/AdminLoginPage"

// Admin Pages
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { AdminProducts } from "./pages/admin/AdminProducts"
import { AdminCategories } from "./pages/admin/AdminCategories"
import { Toaster } from "sonner"
import { ProductForm } from "./components/admin/ProductForm"

// import "./styles/global.css"

function App() {
  return (
    <Router>
      <Toaster />
      <div className="min-h-screen bg-[#FAEDE2]">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />

          <Route
            path="/products"
            element={
              <>
                <Navbar />
                <ProductsPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactPage />
                <Footer />
              </>
            }
          />

          {/* Auth Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Private Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <PrivateRoute>
                <AdminProducts />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/categories"
            element={
              <PrivateRoute>
                <AdminCategories />
              </PrivateRoute>
            }
          />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#651C32] mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600">The page you're looking for doesn't exist.</p>
                  </div>
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
        
      </div>
      
    </Router>
  )
}

export default App
