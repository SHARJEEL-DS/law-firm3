export default function Services() {
  return (
    <>
      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-slate-800">NA ČEM SI ZAKLÁDÁME?</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Transparentní jednání */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                TRANSPARENTNÍ
                <br />A FÉROVÉ JEDNÁNÍ
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fungujeme z velké míry DIGITÁLNĚ. Vždycky si rádi dáme kafe, ale někdy je prostě efektivnější spojit se
                na dálku. Netiskneme stohy papírů a neposíláme si dopisy ani faxy. Vše co jde, vyřešíme online. Umíme
                to.
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://3advokati.cz/wp-content/uploads/2025/04/o-nas-3.webp"
                  alt="Tým v kanceláři"
                  className="w-full h-[500px] "
                />
              </div>
            </div>

            {/* Inovativní řešení */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                INOVATIVNÍ
                <br />A ÚČINNÉ ŘEŠENÍ
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Jsme ONE-STOP-SHOP. Máme za sebou daňaře, účetní, notáře i exekutory. Vše vyřešíme pod jednou střechou.
                Za vás.
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://3advokati.cz/wp-content/uploads/2025/04/o-nas-2.webp"
                  alt="Prezentace v kanceláři"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Srozumitelná komunikace */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                SROZUMITELNÁ
                <br />A JASNÁ KOMUNIKACE
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                S klienty komunikujeme SROZUMITELNĚ. Bez zbytečných citací paragrafů a sahodlouhých textů. Jednoduše.
                Efektivně. Lidsky.
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://3advokati.cz/wp-content/uploads/2025/04/o-nas-1.webp"
                  alt="Dva muži v rozhovoru"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gray-600 mb-2">ROZDÍLNÉ PŘÍPADY,</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">ROZDÍLNÁ ŘEŠENÍ</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fúze a akvizice */}
            <div className="relative bg-slate-900 text-white p-8 rounded-lg overflow-hidden min-h-[300px] flex flex-col justify-between">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=400')`,
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">FÚZE A AKVIZICE</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Kupujete firmu? Prodáváte podíl? Nebo transformujete a nastupujete novou strukturu? V MŠA jsme zvládli
                  plno, takže vás rychle a bezstarostně dovedeme do vašeho vysněného cíle. Můžeme vás zastupovat při
                  strategickém plánování due diligence až po vyjednávání a uzavření transakce.
                </p>
              </div>
              <div className="relative z-10 flex gap-4">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded font-medium transition-colors">
                  FREE KONZULTACE
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded font-medium transition-colors">
                  DETAIL SLUŽBY
                </button>
              </div>
            </div>

            {/* Veřejné zakázky */}
            <div className="relative bg-slate-800 text-white p-8 rounded-lg overflow-hidden min-h-[300px] flex items-end">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: `url('https://3advokati.cz/wp-content/uploads/2025/04/advokatka.webp')`,
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">VEŘEJNÉ ZAKÁZKY</h3>
              </div>
            </div>

            {/* Firemní consiglieri */}
            <div className="relative bg-slate-800 text-white p-8 rounded-lg overflow-hidden min-h-[300px] flex items-end">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=400')`,
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">FIREMNÍ CONSIGLIERI</h3>
              </div>
            </div>

            {/* Services Menu */}
            <div className="bg-slate-800 text-white p-8 rounded-lg">
              <p className="text-teal-400 text-sm mb-4">NAŠE DALŠÍ SLUŽBY</p>
              <div className="space-y-4 mb-8">
                <div className="border-b border-gray-600 pb-3">
                  <h4 className="font-medium">PRACOVNÍ PRÁVO A HR</h4>
                </div>
                <div className="border-b border-gray-600 pb-3">
                  <h4 className="font-medium">SMLOUVY</h4>
                </div>
                <div className="border-b border-gray-600 pb-3">
                  <h4 className="font-medium">NEMOVITOSTI</h4>
                </div>
                <div className="border-b border-gray-600 pb-3">
                  <h4 className="font-medium">SLUŽBA IT/IP</h4>
                </div>
                <div className="border-b border-gray-600 pb-3">
                  <h4 className="font-medium">OBCHODNÍ SPOLEČNOSTI</h4>
                </div>
                <div className="border-b border-gray-600 pb-3">
                  <h4 className="font-medium">VYMÁHÁNÍ POHLEDÁVEK</h4>
                </div>
                <div className="border-b border-gray-600 pb-3">
                  <h4 className="font-medium">TRESTNÍ PRÁVO</h4>
                </div>
              </div>
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded font-medium transition-colors">
                FREE KONZULTACE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="bg-teal-500 text-white py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4">POTŘEBUJETE</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">PROFESIONÁLNÍ RADU?</h2>

              <div className="flex items-center gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">1</span>
                  <span className="text-lg">Férově</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">2</span>
                  <span className="text-lg">Srozumitelně</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">3</span>
                  <span className="text-lg">Účinně</span>
                </div>
              </div>

              <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded font-medium text-lg transition-colors">
                FREE KONZULTACE
              </button>
            </div>

            <div className="flex justify-end">
              <img
                src="https://3advokati.cz/wp-content/uploads/2025/04/advokatka.webp"
                alt="Profesionální žena"
                className="max-w-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
