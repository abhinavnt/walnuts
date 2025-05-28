import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "../animations/ScrollReveal";
import { StaggerContainer, itemVariants } from "../animations/StaggerContainer";
import { ref as firebaseRef, onValue, off } from "firebase/database";
import { db } from "../../config/firebaseConfig";

// Define Category and Product interfaces
interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  categoryId: string;
  tag: string;
  image?: string;
  rating?: number;
  reviews?: number;
}

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [featuredCategories, setFeaturedCategories] = useState<Category[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const sectionRef = useRef(null); // Renamed to avoid conflict with Firebase ref
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Fetch categories and products from Firebase
  useEffect(() => {
    const categoriesRef = firebaseRef(db, "categories");
    const productsRef = firebaseRef(db, "products");

    // Listener for categories
    const categoriesListener = onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const categoriesList = Object.entries(data).map(([id, category]) => ({
          id,
          name: (category as { name: string }).name,
        }));
        // Sort by name and take first three
        const sortedCategories = categoriesList.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 3);
        setFeaturedCategories(sortedCategories);
      } else {
        setFeaturedCategories([]);
      }
    });

    // Listener for products
    const productsListener = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsList = Object.entries(data).map(([id, product]) => {
          const p = product as {
            name: string;
            price: string;
            originalPrice?: string;
            description: string;
            categoryId: string;
            tag: string;
            image?: string;
            rating?: number;
            reviews?: number;
          };
          return {
            id,
            name: p.name,
            price: parseFloat(p.price),
            originalPrice: p.originalPrice ? parseFloat(p.originalPrice) : undefined,
            description: p.description,
            categoryId: p.categoryId,
            tag: p.tag,
            image: p.image,
            rating: p.rating,
            reviews: p.reviews,
          };
        });
        setAllProducts(productsList);
      } else {
        setAllProducts([]);
      }
    });

    // Cleanup listeners on unmount
    return () => {
      off(categoriesRef, "value", categoriesListener);
      off(productsRef, "value", productsListener);
    };
  }, []);

  // Filter products based on activeCategory and limit to 6
  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.categoryId === activeCategory);
  const displayedProducts = filteredProducts.slice(0, 6);

  // Define colors for category buttons
  const categoryColors = ["bg-amber-500", "bg-emerald-500", "bg-purple-500"];

  // Create filter options with "All Products" and three categories
  const filterOptions = [
    { id: "all", name: "All Products", color: "bg-[#651C32]" },
    ...featuredCategories.map((category, index) => ({
      id: category.id,
      name: category.name,
      color: categoryColors[index % categoryColors.length], 
    })),
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FAEDE2]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#651C32]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#651C32]/10 text-[#651C32] rounded-full text-sm font-medium mb-4">
              Featured Products
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#651C32] mb-6 leading-tight">
              Our Premium
              <span className="block text-[#8B2635]">Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              All items in stock are 100% organic and premium quality. We take pride in sourcing the finest products for
              our valued customers.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterOptions.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                    ? `${category.color} text-white shadow-lg scale-105`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  layout
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants} layout className="group">
              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <motion.span
                      className="bg-[#651C32] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      {product.tag}
                    </motion.span>
                  </div>



                  {/* Discount Badge */}
                  {product.originalPrice && product.originalPrice > product.price && (
                    <motion.div
                      className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    >
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">


                  <motion.h3
                    className="text-xl font-serif font-bold text-[#651C32] mb-3 group-hover:text-[#8B2635] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {product.name}
                  </motion.h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <motion.span
                        className="text-2xl font-bold text-[#651C32]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      >
                        ₹{product.price}
                      </motion.span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <motion.span
                          className="text-lg text-gray-500 line-through"
                          initial={{ opacity: 0, x: 10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        >
                          ₹{product.originalPrice}
                        </motion.span>
                      )}
                    </div>


                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#651C32]/10 to-transparent rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="border-2 border-[#651C32] text-[#651C32] hover:bg-[#651C32] hover:text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300">
                Explore All Products
              </button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}