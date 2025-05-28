export interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  category: string
  tag: string
  description: string
  rating?: number
  reviews?: number
}

export const products: Product[] = [
  {
    id: 1,
    name: "Libyan Dark Dates",
    price: 450,
    originalPrice: 500,
    image: "https://via.placeholder.com/300x300/8B4513/FFFFFF?text=Dates",
    category: "dates",
    tag: "Premium Quality",
    description: "Sweet and soft premium dates from Libya",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Mixed Dry Fruits & Nuts",
    price: 800,
    originalPrice: 900,
    image: "https://via.placeholder.com/300x300/D2691E/FFFFFF?text=Mixed+Nuts",
    category: "nuts",
    tag: "Best Seller",
    description: "Perfect mix of premium nuts and dry fruits",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "American Almond",
    price: 650,
    originalPrice: 700,
    image: "https://via.placeholder.com/300x300/CD853F/FFFFFF?text=Almonds",
    category: "nuts",
    tag: "Fresh Stock",
    description: "Crunchy and nutritious American almonds",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Golden Raisins",
    price: 350,
    originalPrice: 400,
    image: "https://via.placeholder.com/300x300/DAA520/FFFFFF?text=Raisins",
    category: "dry-fruits",
    tag: "Organic",
    description: "Sweet golden raisins packed with nutrients",
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 5,
    name: "Cashew Nuts",
    price: 750,
    originalPrice: 800,
    image: "https://via.placeholder.com/300x300/F5DEB3/000000?text=Cashews",
    category: "nuts",
    tag: "Premium",
    description: "Creamy and delicious cashew nuts",
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 6,
    name: "Egyptian Brown Dates",
    price: 400,
    originalPrice: 450,
    image: "https://via.placeholder.com/300x300/A0522D/FFFFFF?text=Brown+Dates",
    category: "dates",
    tag: "Sweet & Soft",
    description: "Traditional Egyptian dates with rich flavor",
    rating: 4.9,
    reviews: 167,
  },
  {
    id: 7,
    name: "Walnuts Premium",
    price: 900,
    originalPrice: 1000,
    image: "https://via.placeholder.com/300x300/8B4513/FFFFFF?text=Walnuts",
    category: "nuts",
    tag: "Brain Food",
    description: "Fresh walnuts rich in omega-3",
    rating: 4.7,
    reviews: 145,
  },
  {
    id: 8,
    name: "Dark Chocolate",
    price: 250,
    originalPrice: 300,
    image: "https://via.placeholder.com/300x300/654321/FFFFFF?text=Chocolate",
    category: "chocolates",
    tag: "Sugar Free",
    description: "Rich dark chocolate with 70% cocoa",
    rating: 4.5,
    reviews: 98,
  },
]
