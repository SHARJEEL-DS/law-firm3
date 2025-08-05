import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Large Text */}
          <div className="relative">
            <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-700 leading-none">
              MAY
              <br />
              THE
              <br />
              LAW
              <br />
              BE WITH
              <br />
              YOU
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-teal-400">3</span>
                <span className="ml-1">ADVOKÁTI</span>
              </span>
            </Link>

            {/* Contact Details */}
            <div className="space-y-4">
              <div>
                <a
                  href="mailto:info@3advokati.cz"
                  className="text-2xl md:text-3xl font-bold hover:text-teal-400 transition-colors"
                >
                  INFO@3ADVOKATI.CZ
                </a>
              </div>
              <div>
                <a
                  href="tel:+420770195212"
                  className="text-3xl md:text-4xl font-bold hover:text-teal-400 transition-colors"
                >
                  +420 770 195 212
                </a>
              </div>
              <div className="text-gray-300">
                <p>Nádražní 879/27, Ostrava 702 00</p>
                <a href="#" className="text-teal-400 hover:underline">
                  Show on map
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-teal-500 rounded flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-teal-500 rounded flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-teal-500 rounded flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              <p>© 2025 ALL RIGHTS RESERVED.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white transition-colors">
                COOKIE SETTINGS
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GDPR
              </a>
              <a href="#" className="hover:text-white transition-colors">
                WHISTLEBLOWING
              </a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>
              ADMINISTRATION AND DEVELOPMENT ARE PROVIDED BY{" "}
              <a href="#" className="text-teal-400 hover:underline">
                SLAJT.CZ
              </a>{" "}
              AND{" "}
              <a href="#" className="text-teal-400 hover:underline">
                TOBYNET.CZ
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
