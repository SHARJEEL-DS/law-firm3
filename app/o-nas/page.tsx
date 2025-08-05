import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-slate-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">O naší kanceláři</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Jsme tým tří zkušených advokátů, kteří se specializují na různé oblasti práva a společně poskytují komplexní
            právní služby.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Naše historie</h2>
              <p className="text-lg text-gray-600 mb-6">
                Advokátní kancelář 3 Advokáti byla založena v roce 2008 s cílem poskytovat kvalitní právní služby v
                Ostravě a okolí. Od samého začátku jsme se zaměřili na individuální přístup ke každému klientovi.
              </p>
              <p className="text-lg text-gray-600">
                Během let jsme si vybudovali silnou pozici na trhu právních služeb díky našim zkušenostem, odbornosti a
                především spokojenosti našich klientů.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Naše kancelář"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-500 mb-4">15+</div>
              <h3 className="text-xl font-semibold mb-2">Let zkušeností</h3>
              <p className="text-gray-600">Více než 15 let poskytujeme právní služby na nejvyšší úrovni.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-500 mb-4">500+</div>
              <h3 className="text-xl font-semibold mb-2">Spokojených klientů</h3>
              <p className="text-gray-600">Stovky klientů nám důvěřují se svými právními záležitostmi.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-500 mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-2">Profesionalita</h3>
              <p className="text-gray-600">Každý případ řešíme s maximální péčí a odborností.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 text-center">Naše hodnoty</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-teal-600">Profesionalita</h3>
                <p className="text-gray-600">
                  Každý případ řešíme s maximální odborností a péčí. Naše zkušenosti a znalosti nám umožňují poskytovat
                  služby na nejvyšší úrovni.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-teal-600">Individuální přístup</h3>
                <p className="text-gray-600">
                  Každý klient je pro nás jedinečný. Snažíme se pochopit jeho specifické potřeby a najít nejlepší řešení
                  pro jeho situaci.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-teal-600">Transparentnost</h3>
                <p className="text-gray-600">
                  Věříme v otevřenou komunikaci s našimi klienty. Vždy je informujeme o postupu řešení jejich případu a
                  možných nákladech.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-teal-600">Efektivita</h3>
                <p className="text-gray-600">
                  Snažíme se řešit právní případy co nejefektivněji, abychom našim klientům ušetřili čas i náklady.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
