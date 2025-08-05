import { Scale, FileText, Users, Building, Shield, Gavel, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "Občanské právo",
    description: "Komplexní právní poradenství v oblasti občanského práva.",
    details: ["Smluvní právo", "Dědické právo", "Věcná práva", "Náhrada škody", "Občanskoprávní spory"],
  },
  {
    icon: Building,
    title: "Obchodní právo",
    description: "Právní služby pro podnikatele a obchodní společnosti.",
    details: ["Zakládání společností", "Obchodní smlouvy", "Fúze a akvizice", "Korporátní právo", "Obchodní spory"],
  },
  {
    icon: FileText,
    title: "Pracovní právo",
    description: "Zastoupení zaměstnanců i zaměstnavatelů.",
    details: [
      "Pracovní smlouvy",
      "Kolektivní vyjednávání",
      "Pracovní spory",
      "Ukončování pracovních poměrů",
      "Mobbing a diskriminace",
    ],
  },
  {
    icon: Shield,
    title: "Trestní právo",
    description: "Obhajoba v trestních řízeních a právní zastoupení.",
    details: [
      "Obhajoba obviněných",
      "Zastoupení poškozených",
      "Přestupkové řízení",
      "Trestní oznámení",
      "Odvolací řízení",
    ],
  },
  {
    icon: Users,
    title: "Rodinné právo",
    description: "Řešení rodinných záležitostí s citlivým přístupem.",
    details: [
      "Rozvody manželství",
      "Péče o nezletilé děti",
      "Alimenty",
      "Majetkové vypořádání",
      "Osvojení a pěstounství",
    ],
  },
  {
    icon: Gavel,
    title: "Správní právo",
    description: "Zastoupení před správními orgány a soudy.",
    details: ["Správní řízení", "Odvolání proti rozhodnutím", "Správní žaloby", "Stavební právo", "Životní prostředí"],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-slate-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Naše služby</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Poskytujeme komplexní právní služby ve všech oblastech práva. Naši advokáti mají bohaté zkušenosti a
            specializují se na konkrétní právní oblasti.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-lg flex-shrink-0">
                    <service.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-slate-800">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Potřebujete právní pomoc?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Neváhejte se na nás obrátit s jakýmkoliv právním problémem. Rádi vám poskytneme odbornou konzultaci a
            najdeme nejlepší řešení.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Kontaktujte nás
            </a>
            <a href="tel:+420596123456" className="btn-secondary text-lg px-8 py-4">
              Zavolejte nám
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
