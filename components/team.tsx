import Image from "next/image"

const team = [
  {
    name: "JUDr. Jan Novák",
    title: "Partner, Občanské a obchodní právo",
    image: "https://3advokati.cz/wp-content/uploads/2025/04/advokatka.webp",
    bio: "Více než 15 let zkušeností v oblasti občanského a obchodního práva. Specializuje se na komplexní právní poradenství pro firmy.",
  },
  {
    name: "JUDr. Marie Svobodová",
    title: "Partner, Rodinné a pracovní právo",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Odbornice na rodinné a pracovní právo s bohatými zkušenostmi z praxe. Věnuje se především ochraně práv zaměstnanců.",
  },
  {
    name: "JUDr. Petr Dvořák",
    title: "Partner, Trestní a správní právo",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Zkušený obhájce v trestních řízeních a specialista na správní právo. Má za sebou stovky úspěšně vyřešených případů.",
  },
]

export default function Team() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Náš tým</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tři zkušení advokáti s různými specializacemi, kteří společně tvoří silný tým schopný řešit i ty
            nejsložitější právní případy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
