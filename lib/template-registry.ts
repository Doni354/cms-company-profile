import type { ReactNode } from "react"
import type { PageTemplate, CMSConfig } from "@/types/config"

// Import template components
import HeroWithFeaturesAndServices from "@/components/templates/home/hero-with-features-and-services"
import AboutCompanyWithTeam from "@/components/templates/about/about-company-with-team"
import ServicesGridWithDetails from "@/components/templates/services/services-grid-with-details"
import ContactFormWithInfo from "@/components/templates/contact/contact-form-with-info"

interface TemplateComponent {
  component: (props: {
    config: PageTemplate
    data: CMSConfig
    sections?: string[]
  }) => ReactNode
  name: string
  description: string
}

export const templateRegistry: Record<string, TemplateComponent> = {
  "hero-with-features-and-services": {
    component: HeroWithFeaturesAndServices,
    name: "Hero with Features & Services",
    description: "Homepage dengan hero section, features, dan services",
  },
  "about-company-with-team": {
    component: AboutCompanyWithTeam,
    name: "About Company with Team",
    description: "Halaman about dengan info company dan tim",
  },
  "services-grid-with-details": {
    component: ServicesGridWithDetails,
    name: "Services Grid",
    description: "Halaman services dengan grid layout",
  },
  "contact-form-with-info": {
    component: ContactFormWithInfo,
    name: "Contact Form with Info",
    description: "Halaman contact dengan form dan informasi",
  },
}

export function getTemplate(templateName: string) {
  return templateRegistry[templateName]
}

export function getAvailableTemplates() {
  return Object.entries(templateRegistry).map(([key, value]) => ({
    id: key,
    ...value,
  }))
}
