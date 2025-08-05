"use client"

import type React from "react"

import { useState } from "react"

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="bg-slate-800 text-white py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gray-300 text-lg mb-4">ARRANGE A CONSULTATION</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">THE FIRST ONE IS FREE</h2>

            {/* Steps */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <span className="text-lg">Fill out the form</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <span className="text-lg">Let's meet or call</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <span className="text-lg">We'll come up with a solution</span>
              </div>
            </div>

            {/* Team Photo */}
            <div className="flex space-x-4">
              <img
                src="/placeholder.svg?height=120&width=100&text=Lawyer+1"
                alt="Lawyer 1"
                className="w-24 h-32 object-cover rounded-lg"
              />
              <img
                src="/placeholder.svg?height=120&width=100&text=Lawyer+2"
                alt="Lawyer 2"
                className="w-24 h-32 object-cover rounded-lg"
              />
              <img
                src="/placeholder.svg?height=120&width=100&text=Lawyer+3"
                alt="Lawyer 3"
                className="w-24 h-32 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-teal-500 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="First and last name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-transparent border-b-2 border-teal-600 text-white placeholder-teal-200 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-transparent border-b-2 border-teal-600 text-white placeholder-teal-200 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-transparent border-b-2 border-teal-600 text-white placeholder-teal-200 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="What's bothering you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-4 bg-transparent border-b-2 border-teal-600 text-white placeholder-teal-200 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>

              <p className="text-sm text-teal-100">
                By completing and submitting this form, you agree to{" "}
                <a href="#" className="underline hover:no-underline">
                  the Processing of Personal Data.
                </a>
              </p>

              <button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded font-medium text-lg transition-colors"
              >
                I WANT A CONSULTATION
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
