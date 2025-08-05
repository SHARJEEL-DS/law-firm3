"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Služby", href: "/sluzby", hasDropdown: true },
    { name: "Reference", href: "#reference" },
    { name: "O nás", href: "/o-nas" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="bg-slate-800/95 backdrop-blur-sm text-white fixed top-0 w-full z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold tracking-tight">
              <span className="text-teal-400">3</span>
              <span className="ml-1">ADVOKÁTI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-white hover:text-teal-400 transition-colors duration-200 py-2"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
              </div>
            ))}
            <Link
              href="/kontakt"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded font-medium transition-colors duration-200 ml-4"
            >
              RYCHLÁ POPTÁVKA
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-teal-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="block px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded font-medium transition-colors duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                RYCHLÁ POPTÁVKA
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
