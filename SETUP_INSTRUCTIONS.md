# Setup Instructions - Company Profile CMS

## Quick Start

### 1. Install & Run

\`\`\`bash
# Jika download dari v0
cd company-profile-cms
npm install
npm run dev
\`\`\`

Atau buat fresh project:

\`\`\`bash
npx create-next-app@latest company-profile-cms \
  --typescript \
  --tailwind \
  --app
cd company-profile-cms
npm install
\`\`\`

### 2. Verify Installation

Buka browser dan kunjungi:
- http://localhost:3000 → Home page
- http://localhost:3000/about → About page
- http://localhost:3000/services → Services page
- http://localhost:3000/contact → Contact page

Semua halaman harus berfungsi dengan baik.

### 3. Start Customizing

Edit file: `data/company-data.ts`

Ubah:
1. **Company Info** - Nama, email, kontak, dll
2. **Navigation** - Menu items
3. **Content** - Team, services, features
4. **Pages** - Template selection & options

Setiap perubahan otomatis reflect di halaman (dengan Hot Reload).

## Struktur JSON Explained

### Company Section

\`\`\`typescript
company: {
  name: 'TechVision',                    // Nama perusahaan
  description: '...',                    // Deskripsi singkat
  logo: '/logo.svg',                     // Path ke logo
  email: 'hello@techvision.com',         // Email
  phone: '+62 812-3456-7890',            // Telepon
  address: 'Jakarta, Indonesia',         // Alamat
  socialLinks: {                         // Social media
    facebook: 'https://...',
    twitter: 'https://...',
    linkedin: 'https://...',
    instagram: 'https://...',
  },
}
\`\`\`

### Navigation

\`\`\`typescript
navigation: [
  { label: 'Label di Menu', href: '/halaman' },
  // Tambah lebih banyak sesuai kebutuhan
]
\`\`\`

### Content Library

Setiap konten adalah array object dengan id, title, description:

\`\`\`typescript
content: {
  team: [
    {
      id: 'unique-id',
      name: 'Nama',
      position: 'Posisi',
      image: '/path/to/image.jpg',
      bio: 'Biografi singkat',
    },
  ],
  services: [
    {
      id: 'unique-id',
      title: 'Nama Layanan',
      description: 'Deskripsi layanan',
    },
  ],
  features: [
    {
      id: 'unique-id',
      title: 'Fitur',
      description: 'Deskripsi fitur',
    },
  ],
  testimonials: [
    {
      id: 'unique-id',
      author: 'Nama Klien',
      content: 'Testimoni mereka',
      rating: 5,
    },
  ],
}
\`\`\`

### Pages Configuration

Setiap halaman punya:
- `template.name` - Nama template yang digunakan
- `template.templateOptions` - Opsi spesifik template
- `template.theme` - Styling override
- `sectionIds` - Content sections mana saja yang ditampilkan

\`\`\`typescript
pages: {
  home: {
    template: {
      name: 'hero-with-features-and-services',
      templateOptions: {
        heroTitle: 'Judul utama',
        heroSubtitle: 'Subtitle',
        // ... other options
      },
      theme: {
        backgroundColor: 'bg-white',
        accentColor: 'blue',
      },
    },
    sectionIds: ['team', 'services'],
  },
}
\`\`\`

## Common Customizations

### Ganti Company Logo

1. Letakkan file logo di `public/` folder (misal: `public/my-logo.svg`)
2. Update di `company-data.ts`:

\`\`\`typescript
company: {
  logo: '/my-logo.svg',  // Update ini
  // ... rest
}
\`\`\`

### Ganti Hero Background

\`\`\`typescript
pages: {
  home: {
    template: {
      templateOptions: {
        heroImage: '/path/to/new-hero-image.jpg',  // Update ini
        // ... rest
      },
    },
  },
}
\`\`\`

### Tambah Team Member

\`\`\`typescript
content: {
  team: [
    // ... existing members
    {
      id: 'new-member',
      name: 'Nama Baru',
      position: 'Posisi',
      image: '/path/to/image.jpg',
      bio: 'Bio singkat',
    },
  ],
}
\`\`\`

### Tambah Service

\`\`\`typescript
content: {
  services: [
    // ... existing services
    {
      id: 'new-service',
      title: 'Layanan Baru',
      description: 'Deskripsi layanan',
    },
  ],
}
\`\`\`

### Ganti Template Halaman

Contoh ganti template home dari `hero-with-features-and-services` ke template lain:

\`\`\`typescript
pages: {
  home: {
    template: {
      name: 'hero-minimal',  // Template baru
      templateOptions: {
        // Update sesuai template baru
      },
    },
  },
}
\`\`\`

## Deploy ke Vercel

### Method 1: Via Vercel CLI

\`\`\`bash
# Login (first time only)
npx vercel login

# Deploy
npx vercel

# Follow the prompts
\`\`\`

### Method 2: Via GitHub

1. Push code ke GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select GitHub repo
5. Click Deploy

Auto-deploy setiap kali push ke main branch.

## Integrasi Firebase (Next Steps)

Ketika siap move data ke database:

1. Setup Firebase project di console.firebase.google.com
2. Create Firestore database
3. Update `lib/config-loader.ts` untuk load dari Firestore
4. Code tidak perlu berubah - hanya data source

Detail ada di `CMS_GUIDE.md` bagian "Integrasi Firebase".

## Troubleshooting

### Port 3000 already in use

\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Changes tidak muncul

Cek:
1. File sudah disave? (auto-save mungkin tidak aktif)
2. Browser refreshed? (Ctrl+R atau Cmd+R)
3. Syntax error di JSON? (Check terminal untuk error message)

### Halaman tidak ditemukan

Pastikan:
1. Page ada di `pages: { ... }` di `company-data.ts`
2. Page route sesuai: `/page-name` untuk `pages.['page-name']`
3. Navigation sudah di-update dengan page baru

## Tips & Best Practices

1. **Gunakan unique IDs** - Setiap content item harus punya id yang unik
2. **Organize content** - Buat naming convention yang konsisten
3. **Use meaningful names** - Jangan use "item1", "item2", etc
4. **Test sebelum deploy** - Refresh halaman untuk memastikan semuanya OK
5. **Backup regularly** - Save copy `company-data.ts` sebelum perubahan besar

## Next Features (Planned)

- [ ] Admin Dashboard untuk manage content via UI
- [ ] Image upload management
- [ ] Multi-language support
- [ ] SEO optimization tools
- [ ] Analytics integration
- [ ] Contact form email integration

---

Need help? Check `CMS_GUIDE.md` untuk dokumentasi lengkap.
