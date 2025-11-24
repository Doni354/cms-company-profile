import type { PageTemplate, CMSConfig } from "@/types/config"
import Image from "next/image"

interface HeroWithFeaturesAndServicesProps {
  config: PageTemplate
  data: CMSConfig
  sections?: string[]
}

export default function HeroWithFeaturesAndServices({ config, data }: HeroWithFeaturesAndServicesProps) {
  const options = config.templateOptions || {}
  const theme = config.theme || {}

  return (
    <div className={theme.backgroundColor || "bg-white"}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {options.heroTitle || "Solusi Teknologi Terdepan"}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {options.heroSubtitle || "Tingkatkan bisnis digital Anda dengan layanan kami"}
            </p>
            <div className="flex gap-4">
              <a
                href={options.ctaHref || "/contact"}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                {options.ctaText || "Mulai Sekarang"}
              </a>
              <a
                href="#features"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            {options.heroImage && (
              <Image
                src={options.heroImage || "/placeholder.svg"}
                alt="Hero"
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Fitur Unggulan</h2>
          <div
            className={`grid gap-8 grid-cols-1 ${options.featuresPerRow === 2 ? "md:grid-cols-2" : "md:grid-cols-4"}`}
          >
            {data.content.features?.map((feature) => (
              <div key={feature.id} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Layanan Kami</h2>
          <div
            className={`grid gap-8 grid-cols-1 ${options.servicesPerRow === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
          >
            {data.content.services?.map((service) => (
              <div key={service.id} className="p-8 bg-white rounded-lg shadow hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {data.content.testimonials && data.content.testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Testimoni Klien</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.content.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-8 bg-blue-50 rounded-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">{testimonial.content}</p>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
