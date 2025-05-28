import { AboutSection } from "../components/sections/AboutSection"
import { WhyChooseUsSection } from "../components/sections/WhyChooseUsSection"

export function AboutPage() {
  return (
    <main>
      <div className="py-20 bg-[#651C32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">About Walnuts</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner for premium quality dates, nuts, and chocolates
          </p>
        </div>
      </div>
      <AboutSection />
      <WhyChooseUsSection />
    </main>
  )
}
