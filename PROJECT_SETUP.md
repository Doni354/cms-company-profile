# Company Profile CMS - Setup Guide

## Konsep Arsitektur

Sistem ini menggunakan pendekatan **Component-driven CMS** dimana:
- Semua elemen UI adalah **React Components** yang terpisah
- Konten dan konfigurasi diatur melalui **JSON files**
- Tidak perlu coding untuk mengubah konten atau tampilannya
- Data nanti bisa dipindahkan ke database (Firebase) tanpa perlu ubah UI component

## Keuntungan Sistem Ini

1. **Fleksibilitas Tinggi**: Ubah tampilan dan konten hanya dengan edit JSON
2. **Maintainability**: Separasi antara code dan content
3. **Scalability**: Siap untuk integrasi database
4. **Reusability**: Component bisa digunakan di multiple tempat
5. **No-Code Management**: Client bisa update konten tanpa developer

## Structure Project

\`\`\`
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (dynamic render)
│   └── [page]/page.tsx     # Dynamic route untuk halaman lain
│
├── components/
│   ├── sections/           # Section components
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── team.tsx
│   │   ├── features.tsx
│   │   ├── cta.tsx
│   │   └── contact.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── dynamic-page-renderer.tsx
│
├── lib/
│   ├── component-registry.tsx  # Map component names ke component actual
│   └── config-loader.ts        # Load JSON config
│
├── types/
│   └── config.ts               # TypeScript types
│
└── data/
    ├── site-config.json        # Global site config
    └── pages/
        ├── home.json           # Home page config
        ├── about.json          # About page config
        ├── services.json       # Services page config
        └── contact.json        # Contact page config
\`\`\`

## Cara Kerja System

### 1. JSON Config
File JSON mendefinisikan:
- Component mana yang akan di-render
- Urutan component
- Props/data untuk setiap component

**Contoh:**
\`\`\`json
{
  "sections": [
    {
      "id": "hero-1",
      "type": "Hero",
      "props": {
        "title": "Transformasi Digital",
        "subtitle": "Mulai sekarang",
        "ctaText": "Hubungi Kami"
      }
    }
  ]
}
\`\`\`

### 2. Component Registry
`lib/component-registry.tsx` adalah pusat dimana:
- Semua components di-export
- Mapping dari string name ke component actual
- Function `renderComponent()` yang membaca config dan render component

### 3. Dynamic Renderer
`DynamicPageRenderer.tsx` mengambil array config dan render sesuai urutan:
\`\`\`tsx
sections.map(section => renderComponent(section))
\`\`\`

### 4. Pages
- **Home page** (`/`): Load `data/pages/home.json`
- **Dynamic routes** (`/[page]`): Load `data/pages/[page].json`
- **Config auto-load**: Saat page load, JSON di-parse dan components di-render

## Mengubah Konten

### Edit Halaman Existing
Ubah file di `data/pages/`:

\`\`\`json
{
  "type": "Hero",
  "props": {
    "title": "NEW TITLE DI SINI",  // Ubah ini
    "subtitle": "NEW SUBTITLE"      // Dan ini
  }
}
\`\`\`

### Menambah Section Baru
1. Pastikan component sudah ada di `components/sections/`
2. Daftarkan di `lib/component-registry.tsx`
3. Add ke array `sections` di JSON file

\`\`\`json
{
  "sections": [
    { "type": "Hero", ... },
    { "type": "About", ... },
    { "type": "Services", ... },     // Tambah di sini
  ]
}
\`\`\`

### Membuat Halaman Baru
1. Buat file JSON baru: `data/pages/nama-halaman.json`
2. Atur sections di dalamnya
3. Update `navigation` di `site-config.json`:

\`\`\`json
{
  "navigation": [
    { "label": "Beranda", "href": "/" },
    { "label": "Halaman Baru", "href": "/nama-halaman" }  // Tambah ini
  ]
}
\`\`\`

## Step-by-Step Setup

### Prerequisites
- Node.js 18+ installed
- npm atau yarn

### 1. Clone/Create Project
\`\`\`bash
# Jika pakai v0, download dan extract
# Atau create new Next.js project
npx create-next-app@latest company-profile --typescript --tailwind
cd company-profile
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# atau
yarn install
\`\`\`

### 3. Copy Files ke Project
Semua files yang di-generate sudah siap, pastikan struktur sesuai.

### 4. Setup JSON Import
Update `next.config.mjs` untuk allow JSON import:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
    };
    return config;
  },
};

module.exports = nextConfig;
\`\`\`

### 5. Run Development Server
\`\`\`bash
npm run dev
# Server akan jalan di http://localhost:3000
\`\`\`

### 6. Test Pages
- Visit `http://localhost:3000` - lihat Home page
- Visit `http://localhost:3000/about` - lihat About page
- Visit `http://localhost:3000/services` - lihat Services page
- Visit `http://localhost:3000/contact` - lihat Contact page

## Integrasi Firebase (Nanti)

Ketika siap integrate Firebase:

### 1. Install Firebase Admin SDK
\`\`\`bash
npm install firebase-admin
\`\`\`

### 2. Setup Environment Variables
\`\`\`env
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
FIREBASE_ADMIN_PRIVATE_KEY=your-private-key
FIREBASE_ADMIN_CLIENT_EMAIL=your-client-email
\`\`\`

### 3. Modify Config Loader
\`\`\`tsx
// lib/config-loader.ts
import admin from 'firebase-admin';

export async function loadSiteConfig(): Promise<SiteConfig> {
  // Load dari Firebase instead of import JSON
  const db = admin.firestore();
  const doc = await db.collection('configs').doc('site').get();
  return doc.data() as SiteConfig;
}

export async function loadPageConfig(pageId: string) {
  const db = admin.firestore();
  const doc = await db.collection('pages').doc(pageId).get();
  return doc.data();
}
\`\`\`

### 4. Create Firestore Collections
- Collection `configs` → Document `site` → Site config
- Collection `pages` → Document per halaman → Page config
- Collection `components` → Master component library

### 5. Build Admin Dashboard (Optional)
- Create form untuk edit content
- Connect ke Firestore
- User bisa manage content tanpa coding

## Tips Maintenance

1. **Jangan ubah component props signature** - akan break existing JSON
2. **Buat backup JSON sebelum ubah** - untuk rollback
3. **Test di local sebelum push** - cek semua halaman
4. **Document component props** - supaya orang lain tahu pakai apa

## Troubleshooting

### Component tidak render
- Cek apakah type di JSON sesuai dengan registry
- Cek console untuk warning messages
- Pastikan component sudah di-export

### JSON tidak load
- Cek path file JSON - harus exact
- Pastikan file JSON valid format
- Lihat error message di console

### Props tidak tergimnakan
- Cek spelling props - case sensitive
- Cek interface type di `types/config.ts`
- Validate JSON format

---

**Ready to ship!** Upload ke Vercel atau host di mana saja. Nanti ketika siap Firebase, replace loader function saja, komponennya tetap.
