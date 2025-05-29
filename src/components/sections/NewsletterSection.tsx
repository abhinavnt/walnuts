
import { ScrollReveal } from "../animations/ScrollReveal"

export function NewsletterSection() {
  return (
    <section className="py-24 bg-[#651C32] text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FAEDE2]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <ScrollReveal>
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
                Stay Connected
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                Stay Updated with Our
                <span className="block text-[#FAEDE2]">Latest Offers</span>
              </h2>

            </div>


          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
