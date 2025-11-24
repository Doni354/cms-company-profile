export interface CompanyInfo {
  name: string
  description: string
  logo: string
  email: string
  phone: string
  address: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
}

export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  bio?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon?: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon?: string
}

export interface PageTemplate {
  name: string // "hero-with-features", "about-team", "contact-form", dll
  templateOptions?: Record<string, any> // Opsi spesifik template
  theme?: {
    backgroundColor?: string
    textColor?: string
    accentColor?: string
    [key: string]: any
  }
}

export interface PageConfig {
  template: PageTemplate
  sectionIds?: string[] // ID section mana saja yang digunakan
}

export interface Navigation {
  label: string
  href: string
}

export interface CMSConfig {
  company: CompanyInfo
  navigation: Navigation[]

  // Content library - semua data company di sini
  content: {
    team: TeamMember[]
    services: Service[]
    features: Feature[]
    testimonials?: any[]
    [key: string]: any
  }

  // Page configuration - template selection
  pages: {
    [key: string]: PageConfig // home, about, services, contact, dll
  }

  // Global theme
  theme?: {
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    fontFamily?: string
    [key: string]: any
  }
}
