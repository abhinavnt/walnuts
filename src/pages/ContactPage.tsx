import { ContactForm } from "../components/contact/ContactForm"
import { ContactInfo } from "../components/contact/ContactInfo"

export function ContactPage() {
  return (
    <main>
      <div className="py-20 bg-[#651C32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with us for any queries or to place your order
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
