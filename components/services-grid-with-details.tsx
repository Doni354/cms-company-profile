import type { PageTemplate, CMSConfig } from "@/types/config"

interface ServicesGridWithDetailsProps {
  config: PageTemplate
  data: CMSConfig
  sections?: string[]
}

export default function ServicesGridWithDetails({ config, data }: ServicesGridWithDetailsProps) {
  const options = config.templateOptions || {}
  const theme = config.theme || {}

  return (
    <div className={theme.backgroundColor || "bg-white"}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">{options.title || "Layanan Kami"}</h1>
            <p className="text-xl text-gray-600">
              {options.subtitle || "Solusi lengkap untuk kebutuhan teknologi bisnis Anda"}
            </p>
          </div>

          <div className={`grid gap-8 grid-cols-1 ${options.gridColumns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {data.content.services?.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                {options.showDescription && <p className="text-gray-700 mb-6">{service.description}</p>}
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                  Pelajari Lebih Lanjut →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
