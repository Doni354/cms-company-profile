"use client"

import { useState } from "react"
import { companyData } from "@/data/company-data"
import { FormCard } from "@/components/form-card"
import { FormField } from "@/components/form-field"

export default function CompanyPage() {
  const [formData, setFormData] = useState(companyData.company)
  const [saved, setSaved] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSocialChange = (platform: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    // Nanti bisa integrate dengan Firebase di sini
  }

  return (
    <div className="space-y-6">
      <FormCard title="Company Information" description="Edit informasi utama perusahaan Anda">
        <div className="space-y-6">
          <FormField label="Company Name" description="Nama perusahaan Anda">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </FormField>

          <FormField label="Description" description="Deskripsi singkat perusahaan">
            <textarea
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </FormField>

          <FormField label="Logo URL" description="URL ke logo perusahaan">
            <input
              type="text"
              value={formData.logo}
              onChange={(e) => handleChange("logo", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </FormField>

          <FormField label="Email" description="Email perusahaan">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </FormField>

          <FormField label="Phone" description="Nomor telepon">
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </FormField>

          <FormField label="Address" description="Alamat lengkap">
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </FormField>
        </div>
      </FormCard>

      <FormCard title="Social Links" description="Edit tautan media sosial Anda">
        <div className="space-y-6">
          {Object.entries(formData.socialLinks || {}).map(([platform, url]) => (
            <FormField key={platform} label={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}>
              <input
                type="url"
                value={url}
                onChange={(e) => handleSocialChange(platform, e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              />
            </FormField>
          ))}
        </div>
      </FormCard>

      <div className="flex gap-3">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
        >
          Save Changes
        </button>
        {saved && (
          <div className="flex items-center gap-2 text-green-600">
            <span>✓</span>
            <span>Changes saved successfully!</span>
          </div>
        )}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
        <p className="font-medium mb-2">Note: Firebase Integration</p>
        <p>
          Sekarang data disimpan di memory. Nanti ketika integrate Firebase, data akan otomatis tersimpan ke database.
        </p>
      </div>
    </div>
  )
}
