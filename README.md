# TechVision Company Profile CMS

Platform company profile berbasis Next.js dengan sistem content management berbasis JSON yang siap untuk integrasi database.

## Features

✨ **Component-Driven Architecture**
- Semua elemen UI adalah reusable React components
- Mudah ditambah atau diubah tanpa coding kompleks

📝 **JSON-Based Content Management**
- Kelola konten hanya dengan edit JSON file
- No database setup di awal - mudah dimulai

🚀 **Firebase Ready**
- Arsitektur siap untuk integrasi Firebase
- Bisa langsung switch dari JSON ke Firestore tanpa ubah UI

🎨 **Beautiful & Responsive**
- Built with Tailwind CSS
- Mobile-first design approach
- Modern UI components

⚡ **Performance Optimized**
- Server-side rendering dengan Next.js 16
- Optimized image loading
- Minimal bundle size

## Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
\`\`\`

## Pages Available

- `/` - Home page
- `/about` - Tentang kami
- `/services` - Layanan kami
- `/contact` - Hubungi kami

## How to Customize

### 1. Change Company Information
Edit `data/site-config.json`:
\`\`\`json
{
  "companyName": "Nama Perusahaan Anda",
  "companyDescription": "Deskripsi perusahaan",
  "contact": {
    "email": "email@anda.com",
    "phone": "+62 xxx-xxxx-xxxx",
    "address": "Alamat Anda"
  }
}
\`\`\`

### 2. Update Home Page Content
Edit `data/pages/home.json` dan ubah props di setiap section.

### 3. Add New Section Type
1. Create component di `components/sections/[name].tsx`
2. Export component
3. Add ke `lib/component-registry.tsx`
4. Use di JSON config

## Project Structure

\`\`\`
src/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utilities & registry
├── types/           # TypeScript types
└── data/            # JSON configs
\`\`\`

## For Developers

See `PROJECT_SETUP.md` untuk dokumentasi lengkap setup dan integrasi Firebase.

## License

MIT

## Support

Untuk pertanyaan atau issue, silakan buat issue di repository ini.
