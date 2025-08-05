"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-slate-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontaktujte nás</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Máte právní problém? Neváhejte se na nás obrátit. Rádi vám pomůžeme najít nejlepší řešení vaší situace.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Rychlá poptávka</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Oblast práva
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Vyberte oblast</option>
                        <option value="obcanske">Občanské právo</option>
                        <option value="obchodni">Obchodní právo</option>
                        <option value="pracovni">Pracovní právo</option>
                        <option value="trestni">Trestní právo</option>
                        <option value="rodinne">Rodinné právo</option>
                        <option value="spravni">Správní právo</option>
                        <option value="jine">Jiné</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Popis vašeho případu *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Popište stručně váš právní problém..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary text-lg py-4">
                    Odeslat poptávku
                  </button>
                  <p className="text-sm text-gray-500">* Povinné údaje. Vaše data zpracováváme v souladu s GDPR.</p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Kontaktní informace</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Adresa</div>
                      <div className="text-gray-600">
                        Stodolní 123
                        <br />
                        702 00 Ostrava
                        <br />
                        Česká republika
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-gray-600">+420 596 123 456</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium">E-mail</div>
                      <div className="text-gray-600">info@3advokati.cz</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Úřední hodiny</div>
                      <div className="text-gray-600">
                        Po-Pá: 8:00 - 17:00
                        <br />
                        So: Po domluvě
                        <br />
                        Ne: Zavřeno
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Potřebujete rychlou pomoc?</h3>
                <p className="text-gray-600 mb-4">
                  V naléhavých případech nás můžete kontaktovat i mimo úřední hodiny.
                </p>
                <a href="tel:+420596123456" className="btn-primary inline-block">
                  Zavolat nyní
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <div className="font-medium">Mapa kanceláře</div>
                  <div className="text-sm">Stodolní 123, Ostrava</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
