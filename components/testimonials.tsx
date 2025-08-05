"use client"

import { useState } from "react"

const testimonials = [
  {
    quote:
      "I appreciate the high professionalism of the entire team, their broad professional scope, willingness, helpfulness, and all this in the form of very friendly communication.",
    company: "ATLAS consulting spol. sro",
    logo: "A",
    image: "//3advokati.cz/wp-content/uploads/2025/04/msic.webp",
  },
  // Add more testimonials as needed
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-gray-600 text-lg mb-2">WHAT THEY SAY ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">OUR CLIENTS</h2>
          </div>
          <button className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-6 py-3 rounded font-medium transition-colors">
            ALL REFERENCES
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={testimonials[currentTestimonial].image || "/placeholder.svg"}
              alt="Client office"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Testimonial Content */}
          <div className="order-1 lg:order-2">
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-slate-800 text-white rounded flex items-center justify-center font-bold text-xl">
                {testimonials[currentTestimonial].logo}
              </div>
              <div>
                <p className="font-medium text-slate-800">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-slate-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
