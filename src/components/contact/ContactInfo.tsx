import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif font-bold text-[#651C32] mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-[#651C32] mt-1" />
          <div>
            <h3 className="font-semibold text-[#651C32] mb-1">Address</h3>
            <p className="text-gray-600">
              VC Tower, Near Sanji Hypermarket,
              <br />
              Opp. KMO, Koduvally
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-[#651C32] mt-1" />
          <div>
            <h3 className="font-semibold text-[#651C32] mb-1">Phone</h3>
            <p className="text-gray-600">+91 9876543210</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-[#651C32] mt-1" />
          <div>
            <h3 className="font-semibold text-[#651C32] mb-1">Email</h3>
            <p className="text-gray-600">info@walnuts.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-[#651C32] mt-1" />
          <div>
            <h3 className="font-semibold text-[#651C32] mb-1">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Saturday: 9:00 AM - 8:00 PM
              <br />
              Sunday: 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-[#651C32] mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="flex items-center space-x-2 text-[#651C32] hover:text-[#651C32]/80">
            <Facebook className="w-5 h-5" />
            <span>Walnut Date Nuts and Chocolate</span>
          </a>
        </div>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="flex items-center space-x-2 text-[#651C32] hover:text-[#651C32]/80">
            <Instagram className="w-5 h-5" />
            <span>@walnutdateschocolate</span>
          </a>
        </div>
      </div>
    </div>
  )
}
