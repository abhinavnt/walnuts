
import type React from "react"

import { useState } from "react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Card } from "../ui/Card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Message sent successfully!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-serif font-bold text-[#651C32] mb-2">Send us a Message</h2>
        <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Product inquiry"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#651C32] focus:border-transparent transition-colors"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  )
}
