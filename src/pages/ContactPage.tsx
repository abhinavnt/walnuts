import { ContactInfo } from "../components/contact/ContactInfo";


export function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32 bg-gradient-to-br from-[#651C32] via-[#8B2538] to-[#651C32] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              className="w-full h-full bg-white opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">Contact Us</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Get in touch with us for premium nuts, dates, and chocolates.
            <br className="hidden sm:block" />
            We're here to make your experience delightful.
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-12">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfo />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#651C32] mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Visit our store or get in touch to discover our carefully curated selection of nuts, dates, and chocolates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916282026935"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#651C32] text-white font-semibold rounded-xl hover:bg-[#8B2538] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Call Now
            </a>
            <a
              href="mailto:walnutdateschoclate@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#651C32] text-[#651C32] font-semibold rounded-xl hover:bg-[#651C32] hover:text-white transition-all duration-300 hover:scale-105"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
