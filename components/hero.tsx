export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 text-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-gray-300 mb-4 tracking-wide">POMŮŽEME VÁM...</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">ZALOŽIT FIRMU</h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded font-medium text-lg transition-colors duration-200">
                FREE KONZULTACE
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded font-medium text-lg transition-all duration-200">
                CO JSTE UMÍME?
              </button>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <img src="https://3advokati.cz/wp-content/uploads/2025/06/Prodej-firmy.png" alt="Tým 3 Advokáti" className="w-full h-auto max-w-2xl ml-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
