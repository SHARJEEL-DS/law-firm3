export default function About() {
  return (
    <section className="bg-gradient-to-b from-teal-900 to-slate-900 text-white py-20">
      <div className="container-custom">
        {/* Clients Section */}
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm tracking-widest mb-12">TIHLE JSOU S NÁMI HAPPY</p>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 opacity-70">
            <div className="text-white text-lg font-light">ATLAS GROUP</div>
            <div className="text-white text-lg font-light">PATRIOT MSK</div>
            <div className="text-white text-lg font-light">AXPEL</div>
            <div className="text-white text-lg font-light">dinitex</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Advokátní kancelář Ostrava</h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Jsme troška jiní advokáti z Ostravy, než jste možná zvyklí. Žádné sahodlouhé texty plné paragrafů a
            latinských citací. Jdeme přímo k věci.
            <br />
            <span className="block mt-4">S nadšením a lidsky.</span>
          </p>
        </div>

        {/* Happy Clients Image */}
        <div className="relative">
          <img
            src="https://3advokati.cz/wp-content/uploads/2025/04/tym-uvodka.webp"
            alt="Spokojení klienti"
            className="w-full h-auto max-w-4xl mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
