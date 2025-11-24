# 🎨 Advanced CMS System - Complete Guide

## Pengenalan Sistem

Sistem CMS ini dirancang untuk memberikan fleksibilitas maksimal dalam mengkustomisasi tampilan dan struktur website **hanya dengan mengubah file konfigurasi** tanpa perlu mengubah code.

### Tiga Level Kustomisasi:

1. **Content Level** - Teks, gambar, dan data di dalam component
2. **Component Selection Level** - Memilih component type apa yang digunakan (Hero, Services, dll)
3. **Styling & Variant Level** - Pilihan layout variant dan warna/tema per component

---

## Struktur File Konfigurasi

Setiap halaman menggunakan file TypeScript di folder `data/pages/`:

\`\`\`typescript
{
  id: "page-id",
  title: "Page Title - Company Name",
  sections: [
    {
      id: "section-id",
      type: "Hero",                    // Component type
      variant: "default",              // Layout variant
      theme: {                         // Styling override
        backgroundColor: "#ffffff",
        textColor: "#111827",
        accentColor: "#2563eb"
      },
      props: {                         // Component props/content
        title: "Judul",
        subtitle: "Subtitle"
      }
    }
  ]
}
\`\`\`

---

## Component Types & Variants

### 1. Hero Component

**Fungsi:** Banner/header utama untuk halaman

**Variants:**
- `default` - Hero dengan background image dan overlay
- `gradient` - Hero dengan gradient background (bawaan warna biru-ungu)
- `minimal` - Hero yang compact tanpa full height

**Example Config:**
\`\`\`typescript
{
  id: "hero-1",
  type: "Hero",
  variant: "gradient",
  theme: {
    accentColor: "#dc2626",      // Warna button CTA
    textColor: "#ffffff"
  },
  props: {
    title: "Judul Besar",
    subtitle: "Subtitle kecil",
    ctaText: "Tombol Action",
    ctaLink: "/target-page",
    backgroundImage: "/path-to-image.jpg"  // Hanya untuk variant "default"
  }
}
\`\`\`

**Available Props:**
- `title` (required) - Judul utama
- `subtitle` (required) - Subtitle/deskripsi singkat
- `ctaText` - Teks tombol CTA
- `ctaLink` - URL target tombol CTA
- `backgroundImage` - URL gambar background
- `alignContent` - Alignment: "left", "center", "right"

---

### 2. About Component

**Fungsi:** Section tentang perusahaan/produk

**Variants:**
- `default` - Layout grid 2 kolom (text kiri, image kanan)
- `split-layout` - Layout yang lebih responsif untuk mobile

**Example Config:**
\`\`\`typescript
{
  id: "about-1",
  type: "About",
  variant: "split-layout",
  theme: {
    accentColor: "#3b82f6"       // Warna bullet points
  },
  props: {
    title: "Tentang Kami",
    description: "Paragraf deskripsi...",
    points: [
      "Poin 1",
      "Poin 2",
      "Poin 3"
    ],
    image: "/about-image.jpg"
  }
}
\`\`\`

**Available Props:**
- `title` (required) - Judul section
- `description` (required) - Deskripsi panjang
- `points` - Array dari bullet points
- `image` - URL gambar

---

### 3. Features Component

**Fungsi:** Menampilkan fitur/keunggulan produk

**Variants:**
- `grid` - Grid layout 4 kolom (default)
- `checklist` - Format list dengan icon dan deskripsi panjang
- `accordion` - Format accordion (collapsible)

**Example Config:**
\`\`\`typescript
{
  id: "features-1",
  type: "Features",
  variant: "checklist",
  theme: {
    backgroundColor: "#f9fafb",
    accentColor: "#10b981"
  },
  props: {
    title: "Fitur Utama",
    description: "Deskripsi singkat fitur",
    features: [
      {
        icon: "Zap",              // Lihat icon map di bawah
        title: "Nama Fitur",
        description: "Deskripsi detail fitur"
      }
    ]
  }
}
\`\`\`

**Available Icons:**
- `Zap` - ⚡ Lightning bolt
- `Shield` - 🛡️ Security
- `TrendingUp` - 📈 Growth
- `Users` - 👥 People
- `Code` - 💻 Developer
- `Smartphone` - 📱 Mobile
- `Cloud` - ☁️ Cloud
- `Briefcase` - 💼 Business

---

### 4. Services Component

**Fungsi:** Daftar layanan/produk yang ditawarkan

**Variants:**
- `grid` - Grid layout dengan card
- `carousel` - Carousel slider horizontal
- `list` - Format list vertical

**Example Config:**
\`\`\`typescript
{
  id: "services-1",
  type: "Services",
  variant: "list",
  theme: {
    accentColor: "#8b5cf6"
  },
  props: {
    title: "Layanan Kami",
    description: "Deskripsi layanan",
    services: [
      {
        id: "service-1",
        title: "Nama Layanan",
        description: "Deskripsi detail layanan",
        icon: "Code"
      }
    ]
  }
}
\`\`\`

---

### 5. Team Component

**Fungsi:** Menampilkan anggota tim

**Variants:** (Coming soon dengan variants grid/carousel/table)

---

### 6. CTA Component

**Fungsi:** Call-to-action section

**Props:**
- `title` - Judul CTA
- `subtitle` - Subtitle/deskripsi
- `primaryButton` - `{ text: string, link: string }`
- `secondaryButton` - `{ text: string, link: string }`

---

## Theme System

### Global Theme (defaultTheme)

Didefinisikan di `data/site-config.ts`:

\`\`\`typescript
export const siteConfig: SiteConfig = {
  // ... other config
  defaultTheme: {
    backgroundColor: "#ffffff",
    textColor: "#111827",
    accentColor: "#2563eb",
    borderColor: "#e5e7eb"
  }
}
\`\`\`

**Ini adalah default untuk SEMUA component jika tidak override.**

### Component-Level Theme Override

Di masing-masing section di page config:

\`\`\`typescript
{
  id: "section-id",
  type: "Services",
  theme: {
    // Ini override global theme HANYA untuk section ini
    backgroundColor: "#f3f4f6",
    textColor: "#000000",
    accentColor: "#ef4444"
  },
  props: { /* ... */ }
}
\`\`\`

### Theme Properties

| Property | Tipe | Deskripsi | Contoh |
|----------|------|-----------|--------|
| `backgroundColor` | hex color | Background color section | `"#ffffff"` |
| `textColor` | hex color | Primary text color | `"#111827"` |
| `accentColor` | hex color | Button & highlight color | `"#2563eb"` |
| `borderColor` | hex color | Border color | `"#e5e7eb"` |
| `padding` | string | CSS padding | `"p-8"` |
| `borderRadius` | string | CSS border radius | `"rounded-lg"` |
| `customClasses` | string | Tailwind classes | `"shadow-lg"` |

---

## Practical Examples

### Example 1: Dark Mode Section

\`\`\`typescript
{
  id: "dark-features",
  type: "Features",
  variant: "grid",
  theme: {
    backgroundColor: "#1f2937",
    textColor: "#f3f4f6",
    accentColor: "#fbbf24"
  },
  props: {
    title: "Fitur Premium",
    features: [/* ... */]
  }
}
\`\`\`

### Example 2: Minimal Hero

\`\`\`typescript
{
  id: "minimal-hero",
  type: "Hero",
  variant: "minimal",
  theme: {
    accentColor: "#10b981"
  },
  props: {
    title: "Selamat Datang",
    subtitle: "Platform kami siap membantu"
  }
}
\`\`\`

### Example 3: Checklist Features dengan Warna Custom

\`\`\`typescript
{
  id: "requirements",
  type: "Features",
  variant: "checklist",
  theme: {
    backgroundColor: "#eff6ff",
    accentColor: "#0284c7"
  },
  props: {
    title: "Requirement Teknis",
    features: [
      {
        icon: "Code",
        title: "Node.js 18+",
        description: "Runtime JavaScript terbaru"
      },
      // ... lebih banyak items
    ]
  }
}
\`\`\`

---

## Workflow: Mengubah Tampilan Halaman

### Skenario: Saya ingin mengubah warna Services section menjadi orange

**Step 1:** Buka file halaman yang ingin diubah (misal `data/pages/home.ts`)

**Step 2:** Cari section Services:
\`\`\`typescript
{
  id: "services-1",
  type: "Services",
  // ... existing code
}
\`\`\`

**Step 3:** Tambahkan/update theme:
\`\`\`typescript
{
  id: "services-1",
  type: "Services",
  variant: "grid",
  theme: {
    accentColor: "#f97316"  // Orange
  },
  props: { /* ... */ }
}
\`\`\`

**Step 4:** Save dan refresh browser - done! ✅

**Tidak perlu edit component code sama sekali!**

---

## Workflow: Menambah Halaman Baru

### Step 1: Buat file config
File: `data/pages/portfolio.ts`

\`\`\`typescript
import type { PageConfig } from "@/types/config"

export default {
  id: "portfolio",
  title: "Portfolio - Company Name",
  sections: [
    {
      id: "hero-portfolio",
      type: "Hero",
      variant: "minimal",
      props: {
        title: "Portfolio Kami",
        subtitle: "Lihat project terbaik kami"
      }
    },
    // ... tambah sections lainnya
  ]
} as PageConfig
\`\`\`

### Step 2: Import di `data/pages/index.ts`
\`\`\`typescript
import portfolio from "./portfolio"

export const allPages = {
  home,
  about,
  services,
  portfolio,  // <-- Tambah ini
}
\`\`\`

### Step 3: Update navigation di `data/site-config.ts`
\`\`\`typescript
navigation: [
  // ... existing items
  { label: "Portfolio", href: "/portfolio" }
]
\`\`\`

### Step 4: Access di `http://localhost:3000/portfolio`

---

## Nanti: Integrasi Firebase

Ketika data akan dipindah ke Firebase:

1. **Update `lib/config-loader.ts`** untuk fetch dari Firestore
2. **Component code tetap sama** - hanya data source yang berubah
3. **UI untuk edit config** bisa dibuat di admin dashboard
4. **Real-time updates** saat ada perubahan di database

Contoh firebase integration:
\`\`\`typescript
// lib/config-loader.ts
export async function getPageConfig(pageId: string) {
  const doc = await db.collection("pages").doc(pageId).get()
  return doc.data() as PageConfig
}
\`\`\`

---

## Best Practices

✅ **DO:**
- Gunakan semantic color names (primary, secondary, accent)
- Konsisten dengan global theme
- Test setiap variant
- Document custom theme colors

❌ **DON'T:**
- Jangan gunakan hard-coded colors di component
- Jangan mix variant yang tidak cocok
- Jangan create terlalu banyak section di satu halaman
- Jangan forget untuk update navigation

---

## Troubleshooting

### Component tidak muncul?
- Check typo di `type` field
- Pastikan component sudah di-export di `lib/component-registry.ts`

### Warna tidak berubah?
- Pastikan menggunakan valid hex color (`#123456`)
- Check browser cache (hard refresh)
- Verify field name typo

### Halaman baru tidak accessible?
- Check di `data/pages/index.ts` sudah import
- Update navigation di `site-config.ts`
- Pastikan file name dan route match

---

## Summary

System ini memberikan complete control over:
- **Halaman** - Pilih sections & order
- **Components** - Pilih variant & styling
- **Content** - Update teks, gambar, data
- **Theme** - Warna & styling per section

Semua **tanpa perlu edit code** setelah setup awal! Perfect untuk CMS yang akan diintegrasikan dengan database nanti.
`
