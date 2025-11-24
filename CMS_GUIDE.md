# CMS Guide - Single JSON Configuration

## Konsep Utama

Sistem CMS ini menggunakan **satu file JSON utama** (`data/company-data.ts`) yang berisi:
- **Company Info** - Data perusahaan (nama, email, kontak, etc)
- **Content Library** - Semua konten yang digunakan di berbagai halaman (team, services, features, etc)
- **Page Configuration** - Konfigurasi halaman dengan template selection

## Struktur File

\`\`\`
data/
├── company-data.ts          # Single source of truth untuk semua CMS data
├── pages/                   # (deprecated - tidak digunakan lagi)
└── site-config.ts           # (deprecated - tidak digunakan lagi)

lib/
├── config-loader.ts         # Helper functions untuk load data
├── component-registry.ts    # (deprecated)
└── template-registry.ts     # Registry untuk semua template components

components/
├── page-renderer.tsx        # Main component untuk render page berdasarkan template
├── navbar.tsx               # Navigation
├── footer.tsx               # Footer
└── templates/               # Template components
    ├── home/
    │   └── hero-with-features-and-services.tsx
    ├── about/
    │   └── about-company-with-team.tsx
    ├── services/
    │   └── services-grid-with-details.tsx
    └── contact/
        └── contact-form-with-info.tsx
\`\`\`

## Cara Menggunakan

### 1. Customize Company Info

Edit `data/company-data.ts`:

\`\`\`typescript
export const companyData: CMSConfig = {
  company: {
    name: 'NAMA PERUSAHAAN ANDA',
    description: 'Deskripsi singkat',
    logo: '/logo.svg',
    email: 'contact@company.com',
    phone: '+62 812-3456-7890',
    address: 'Kota, Indonesia',
    socialLinks: {
      facebook: 'https://...',
      twitter: 'https://...',
      linkedin: 'https://...',
      instagram: 'https://...',
    },
  },
  // ... rest of config
}
\`\`\`

### 2. Update Content Library

Semua content disimpan di satu tempat:

\`\`\`typescript
content: {
  team: [
    {
      id: 'john-doe',
      name: 'John Doe',
      position: 'CEO',
      image: '/path/to/image.jpg',
      bio: 'Bio singkat',
    },
    // Add more team members
  ],

  services: [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Deskripsi layanan',
    },
    // Add more services
  ],

  features: [
    {
      id: 'feature-1',
      title: 'Fitur 1',
      description: 'Deskripsi fitur',
    },
    // Add more features
  ],

  testimonials: [
    {
      id: 'testimonial-1',
      author: 'Nama Klien',
      content: 'Testimoni mereka',
      rating: 5,
    },
    // Add more testimonials
  ],
},
\`\`\`

### 3. Configure Pages dengan Template Selection

\`\`\`typescript
pages: {
  home: {
    template: {
      name: 'hero-with-features-and-services',  // Template name
      templateOptions: {
        heroTitle: 'Judul Hero',
        heroSubtitle: 'Subtitle hero',
        heroImage: '/path/to/hero-image.jpg',
        ctaText: 'Button Text',
        ctaHref: '/contact',
        featuresPerRow: 4,
        servicesPerRow: 2,
      },
      theme: {
        backgroundColor: 'bg-white',
        accentColor: 'blue',
      },
    },
    sectionIds: ['team', 'services', 'features', 'testimonials'],
  },

  about: {
    template: {
      name: 'about-company-with-team',
      templateOptions: {
        aboutTitle: 'Tentang Kami',
        aboutDescription: 'Deskripsi perusahaan',
        aboutImage: '/path/to/about-image.jpg',
        showTeam: true,
        showMission: true,
        showVision: true,
      },
      theme: {
        backgroundColor: 'bg-gray-50',
      },
    },
    sectionIds: ['team'],
  },

  services: {
    template: {
      name: 'services-grid-with-details',
      templateOptions: {
        title: 'Layanan Kami',
        subtitle: 'Subtitle',
        gridColumns: 2,
        showDescription: true,
      },
      theme: {
        backgroundColor: 'bg-white',
      },
    },
    sectionIds: ['services'],
  },

  contact: {
    template: {
      name: 'contact-form-with-info',
      templateOptions: {
        title: 'Hubungi Kami',
        subtitle: 'Subtitle',
        formFields: ['name', 'email', 'phone', 'subject', 'message'],
        showMap: true,
      },
      theme: {
        backgroundColor: 'bg-blue-50',
      },
    },
  },
},
\`\`\`

## Cara Kerja

1. User visit `/` atau `/about` atau halaman lain
2. Page route load config dari `company-data.ts`
3. `PageRenderer` component membaca `pageKey` dan `template.name`
4. Template component di-render dengan data dari content library
5. Output adalah halaman yang fully customizable via JSON saja

## Menambah Halaman Baru

1. **Add page config** di `data/company-data.ts`:

\`\`\`typescript
pages: {
  // ... existing pages
  portfolio: {
    template: {
      name: 'portfolio-grid',  // existing atau custom template
      templateOptions: {
        title: 'Portfolio Kami',
      },
    },
  },
}
\`\`\`

2. **Update navigation** di `company-data.ts`:

\`\`\`typescript
navigation: [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },  // Add this
  { label: 'Kontak', href: '/contact' },
]
\`\`\`

3. **Add ke content library** jika perlu (optional)

4. Halaman otomatis accessible via `/portfolio` tanpa edit code lain

## Ganti Template

Untuk ganti template halaman, cukup ubah `template.name`:

\`\`\`typescript
// Sebelum:
home: {
  template: {
    name: 'hero-with-features-and-services',
    // ...
  },
}

// Sesudah:
home: {
  template: {
    name: 'hero-minimal',  // Template baru
    // ...
  },
}
\`\`\`

Jika template baru ada, halaman langsung berubah tampilan. Konten tetap sama.

## Customize Styling

Update `theme` di page config:

\`\`\`typescript
pages: {
  home: {
    template: {
      theme: {
        backgroundColor: 'bg-gradient-to-r from-blue-50 to-indigo-50',
        accentColor: 'green',
        textColor: 'text-gray-900',
      },
    },
  },
}
\`\`\`

## Integrasi Firebase (Nanti)

Ketika siap integrate database:

1. Setup Firebase project
2. Load `companyData` dari Firestore instead of static file:

\`\`\`typescript
// config-loader.ts
export async function loadCMSConfig(): Promise<CMSConfig> {
  const doc = await db.collection('cms').doc('config').get()
  return doc.data() as CMSConfig
}
\`\`\`

3. Code tidak perlu berubah - hanya data source yang berbeda
4. Admin bisa edit via Firebase Console atau custom admin panel

## Available Templates

- `hero-with-features-and-services` - Homepage dengan hero, features, services
- `about-company-with-team` - About page dengan team
- `services-grid-with-details` - Services page dengan grid
- `contact-form-with-info` - Contact page dengan form

Untuk menambah template baru:
1. Create component di `components/templates/[section]/[name].tsx`
2. Export di `lib/template-registry.ts`
3. Use di `company-data.ts`
