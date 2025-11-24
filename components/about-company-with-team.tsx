import type { PageTemplate, CMSConfig } from "@/types/config"
import Image from "next/image"

interface AboutCompanyWithTeamProps {
  config: PageTemplate
  data: CMSConfig
  sections?: string[]
}

export default function AboutCompanyWithTeam({ config, data }: AboutCompanyWithTeamProps) {
  const options = config.templateOptions || {}
  const theme = config.theme || {}

  return (
    <div className={theme.backgroundColor || "bg-white"}>
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">{options.aboutTitle || "Tentang " + data.company.name}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {options.aboutDescription || data.company.description}
            </p>
            <div className="space-y-4">
              {options.showMission && (
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold mb-2">Misi Kami</h3>
                  <p className="text-gray-600">
                    Memberikan solusi teknologi terbaik untuk mendorong transformasi digital bisnis Anda.
                  </p>
                </div>
              )}
              {options.showVision && (
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-lg font-semibold mb-2">Visi Kami</h3>
                  <p className="text-gray-600">
                    Menjadi mitra teknologi terpercaya yang mendorong inovasi dan pertumbuhan bisnis.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="relative h-96">
            {options.aboutImage && (
              <Image
                src={options.aboutImage || "/placeholder.svg"}
                alt="About"
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {options.showTeam && data.content.team && (
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Tim Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.content.team.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    {member.image && (
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
