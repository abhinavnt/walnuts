import { HeroSection } from "../components/sections/HeroSection"
import { AboutSection } from "../components/sections/AboutSection"
import { CategoriesSection } from "../components/sections/CategoriesSection"
import { ProductsSection } from "../components/sections/ProductsSection"
import { WhyChooseUsSection } from "../components/sections/WhyChooseUsSection"
import { TestimonialsSection } from "../components/sections/TestimonialsSection"
import { NewsletterSection } from "../components/sections/NewsletterSection"

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}
