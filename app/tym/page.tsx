import Image from "next/image"
import { Mail, Phone } from "lucide-react"

const team = [
  {
    name: "JUDr. Jan Novák",
    title: "Partner",
    specialization: "Občanské a obchodní právo",
    image: "/placeholder.svg?height=500&width=400",
    bio: "Více než 15 let zkušeností v oblasti občanského a obchodního práva. Specializuje se na komplexní právní poradenství pro firmy a smluvní právo. Absolvoval Právnickou fakultu Masarykovy univerzity v Brně.",
    email: "novak@3advokati.cz",
    phone: "+420 596 123 456",
    education: [
      "Právnická fakulta Masarykovy univerzity, Brno",
      "Advokátní zkouška (2008)",
      "Specializační kurz obchodního práva",
    ],
    experience: [
      "Partner v 3 Advokáti (2015-současnost)",
      "Senior advokát v mezinárodní kanceláři (2010-2015)",
      "Právník ve firemní praxi (2008-2010)",
    ],
  },
  {
    name: "JUDr. Marie Svobodová",
    title: "Partner",
    specialization: "Rodinné a pracovní právo",
    image: "/placeholder.svg?height=500&width=400",
    bio: "Odbornice na rodinné a pracovní právo s bohatými zkušenostmi z praxe. Věnuje se především ochraně práv zaměstnanců a citlivému řešení rodinných sporů. Absolventka Právnické fakulty Univerzity Karlovy.",
    email: "svobodova@3advokati.cz",
    phone: "+420 596 123 457",
    education: [
      "Právnická fakulta Univerzity Karlovy, Praha",
      "Advokátní zkouška (2009)",
      "Mediátorský kurz pro rodinné spory",
    ],
    experience: [
      "Partner v 3 Advokáti (2015-současnost)",
      "Advokátka specializující se na rodinné právo (2009-2015)",
      "Stáž u Nejvyššího soudu ČR",
    ],
  },
  {
    name: "JUDr. Petr Dvořák",
    title: "Partner",
    specialization: "Trestní a správní právo",
    image: "/placeholder.svg?height=500&width=400",
    bio: "Zkušený obhájce v trestních řízeních a specialista na správní právo. Má za sebou stovky úspěšně vyřešených případů. Absolvent Právnické fakulty Univerzity Palackého v Olomouci.",
    email: "dvorak@3advokati.cz",
    phone: "+420 596 123 458",
    education: [
      "Právnická fakulta Univerzity Palackého, Olomouc",
      "Advokátní zkouška (2007)",
      "Specializační kurz trestního práva",
    ],
    experience: [
      "Partner v 3 Advokáti (2015-současnost)",
      "Obhájce u Krajského soudu v Ostravě (2007-2015)",
      "Právník na Státním zastupitelství (2005-2007)",
    ],
  },
]

export default function TeamPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-slate-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Náš tým</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tři zkušení advokáti s různými specializacemi, kteří společně tvoří silný tým schopný řešit i ty
            nejsložitější právní případy.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {team.map((member, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <h2 className="text-3xl font-bold mb-2 text-slate-800">{member.name}</h2>
                  <p className="text-xl text-teal-600 font-medium mb-2">{member.title}</p>
                  <p className="text-lg text-gray-600 mb-6">{member.specialization}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Vzdělání</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {member.education.map((edu, eduIndex) => (
                          <li key={eduIndex}>• {edu}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Praxe</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {member.experience.map((exp, expIndex) => (
                          <li key={expIndex}>• {exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
