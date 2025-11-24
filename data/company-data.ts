import type { CMSConfig } from "@/types/config"

export const companyData: CMSConfig = {
  company: {
    name: "TechVision",
    description: "Solusi teknologi terdepan untuk bisnis digital Anda",
    logo: "/logo.svg",
    email: "hello@techvision.com",
    phone: "+62 812-3456-7890",
    address: "Jakarta, Indonesia",
    socialLinks: {
      facebook: "https://facebook.com/techvision",
      twitter: "https://twitter.com/techvision",
      linkedin: "https://linkedin.com/company/techvision",
      instagram: "https://instagram.com/techvision",
    },
  },

  navigation: [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Layanan", href: "/services" },
    { label: "Kontak", href: "/contact" },
  ],

  // Semua konten company di sini - tidak perlu duplikasi
  content: {
    team: [
      {
        id: "john-doe",
        name: "John Doe",
        position: "Chief Executive Officer",
        image: "/professional-headshot.jpg",
        bio: "Visioner dengan 10+ tahun pengalaman di industri teknologi",
      },
      {
        id: "jane-smith",
        name: "Jane Smith",
        position: "Chief Technology Officer",
        image: "/tech-professional.jpg",
        bio: "Expert dalam cloud architecture dan DevOps",
      },
      {
        id: "mike-johnson",
        name: "Mike Johnson",
        position: "Lead Designer",
        image: "/design-professional.jpg",
        bio: "Spesialis UX/UI design dengan portofolio internasional",
      },
    ],

    services: [
      {
        id: "web-development",
        title: "Web Development",
        description: "Membuat aplikasi web modern dengan teknologi terkini",
      },
      {
        id: "mobile-app",
        title: "Mobile Application",
        description: "Pengembangan aplikasi iOS dan Android berkualitas tinggi",
      },
      {
        id: "cloud-solution",
        title: "Cloud Solution",
        description: "Infrastruktur cloud yang scalable dan aman",
      },
      {
        id: "consulting",
        title: "Digital Consulting",
        description: "Strategi digital transformation untuk bisnis Anda",
      },
    ],

    features: [
      {
        id: "fast",
        title: "Cepat",
        description: "Performance optimized untuk user experience terbaik",
      },
      {
        id: "secure",
        title: "Aman",
        description: "Keamanan tingkat enterprise dengan enkripsi end-to-end",
      },
      {
        id: "scalable",
        title: "Scalable",
        description: "Infrastruktur yang tumbuh seiring bisnis Anda",
      },
      {
        id: "support",
        title: "Support 24/7",
        description: "Tim support siap membantu kapan pun Anda butuh",
      },
    ],

    testimonials: [
      {
        id: "testimonial-1",
        author: "CEO StartupXYZ",
        content: "Mereka membantu kami mencapai produk kami dalam waktu singkat",
        rating: 5,
      },
      {
        id: "testimonial-2",
        author: "Manager PT ABC",
        content: "Solusi cloud mereka sangat reliable dan cost-effective",
        rating: 5,
      },
    ],
  },

  // Page templates - tinggal pilih template dan customize
  pages: {
    home: {
      template: {
        name: "hero-with-features-and-services",
        templateOptions: {
          heroTitle: "Solusi Teknologi Terdepan",
          heroSubtitle: "Tingkatkan bisnis digital Anda dengan layanan kami",
          heroImage: "/modern-office.jpg",
          ctaText: "Mulai Sekarang",
          ctaHref: "/contact",
          featuresPerRow: 4,
          servicesPerRow: 2,
        },
        theme: {
          backgroundColor: "bg-white",
          accentColor: "blue",
        },
      },
      sectionIds: ["team", "services", "features", "testimonials"],
    },

    about: {
      template: {
        name: "about-company-with-team",
        templateOptions: {
          aboutTitle: "Tentang TechVision",
          aboutDescription:
            "Kami adalah perusahaan teknologi yang berdedikasi untuk memberikan solusi terbaik bagi klien kami.",
          aboutImage: "/company-office.jpg",
          showTeam: true,
          showMission: true,
          showVision: true,
        },
        theme: {
          backgroundColor: "bg-gray-50",
        },
      },
      sectionIds: ["team"],
    },

    services: {
      template: {
        name: "services-grid-with-details",
        templateOptions: {
          title: "Layanan Kami",
          subtitle: "Solusi lengkap untuk kebutuhan teknologi bisnis Anda",
          gridColumns: 2,
          showDescription: true,
        },
        theme: {
          backgroundColor: "bg-white",
          accentColor: "green",
        },
      },
      sectionIds: ["services"],
    },

    contact: {
      template: {
        name: "contact-form-with-info",
        templateOptions: {
          title: "Hubungi Kami",
          subtitle: "Kami siap membantu Anda. Hubungi kami untuk konsultasi gratis",
          formFields: ["name", "email", "phone", "subject", "message"],
          showMap: true,
        },
        theme: {
          backgroundColor: "bg-blue-50",
          accentColor: "blue",
        },
      },
    },
  },

  theme: {
    primaryColor: "#3b82f6",
    secondaryColor: "#1f2937",
    accentColor: "#10b981",
    fontFamily: "Inter, system-ui, sans-serif",
  },
}
