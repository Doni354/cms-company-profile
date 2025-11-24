"use client"

import { useState } from "react"
import { companyData } from "@/data/company-data"
import { FormCard } from "@/components/form-card"
import { FormField } from "@/components/form-field"

export default function ThemePage() {
  const [theme, setTheme] = useState(companyData.theme)
  const [saved, setSaved] = useState(false)

  const handleColorChange = (colorKey: string, value: string) => {
    setTheme((prev) => ({
      ...prev,
      [colorKey]: value,
    }))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const colorPresets = [
    { name: "Blue", primary: "#3b82f6", secondary: "#1f2937", accent: "#10b981" },
    { name: "Purple", primary: "#a855f7", secondary: "#1f2937", accent: "#ec4899" },
    { name: "Green", primary: "#10b981", secondary: "#1f2937", accent: "#06b6d4" },
    { name: "Red", primary: "#ef4444", secondary: "#1f2937", accent: "#f59e0b" },
  ]

  return (
    <div className="space-y-6">
      <FormCard title="Global Theme Colors" description="Manage the global color scheme for your website">
        <div className="space-y-6">
          <FormField label="Primary Color">
            <div className="flex gap-4">
              <input
                type="color"
                value={theme?.primaryColor || "#3b82f6"}
                onChange={(e) => handleColorChange("primaryColor", e.target.value)}
                className="w-20 h-12 border border-border rounded-lg cursor-pointer"
              />
              <input
                type="text"
                value={theme?.primaryColor || "#3b82f6"}
                onChange={(e) => handleColorChange("primaryColor", e.target.value)}
                className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground font-mono text-sm"
              />
            </div>
          </FormField>

          <FormField label="Secondary Color">
            <div className="flex gap-4">
              <input
                type="color"
                value={theme?.secondaryColor || "#1f2937"}
                onChange={(e) => handleColorChange("secondaryColor", e.target.value)}
                className="w-20 h-12 border border-border rounded-lg cursor-pointer"
              />
              <input
                type="text"
                value={theme?.secondaryColor || "#1f2937"}
                onChange={(e) => handleColorChange("secondaryColor", e.target.value)}
                className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground font-mono text-sm"
              />
            </div>
          </FormField>

          <FormField label="Accent Color">
            <div className="flex gap-4">
              <input
                type="color"
                value={theme?.accentColor || "#10b981"}
                onChange={(e) => handleColorChange("accentColor", e.target.value)}
                className="w-20 h-12 border border-border rounded-lg cursor-pointer"
              />
              <input
                type="text"
                value={theme?.accentColor || "#10b981"}
                onChange={(e) => handleColorChange("accentColor", e.target.value)}
                className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground font-mono text-sm"
              />
            </div>
          </FormField>

          <FormField label="Font Family">
            <input
              type="text"
              value={theme?.fontFamily || "Inter, system-ui, sans-serif"}
              onChange={(e) => handleColorChange("fontFamily", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </FormField>
        </div>
      </FormCard>

      <FormCard title="Color Presets" description="Quick select from predefined color schemes">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                setTheme({
                  ...theme,
                  primaryColor: preset.primary,
                  secondaryColor: preset.secondary,
                  accentColor: preset.accent,
                })
              }}
              className="p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
            >
              <div className="flex gap-2 mb-2">
                <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: preset.primary }} />
                <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: preset.secondary }} />
                <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: preset.accent }} />
              </div>
              <p className="text-sm font-medium">{preset.name}</p>
            </button>
          ))}
        </div>
      </FormCard>

      <FormCard title="Preview" description="See how your colors look">
        <div className="space-y-4">
          <div className="h-20 rounded-lg border-2 border-black/10" style={{ backgroundColor: theme?.primaryColor }}>
            <p className="p-4 text-white font-bold">Primary Color</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="h-16 rounded-lg border-2 border-black/10"
              style={{ backgroundColor: theme?.secondaryColor }}
            >
              <p className="p-2 text-white text-sm font-medium">Secondary</p>
            </div>
            <div className="h-16 rounded-lg border-2 border-black/10" style={{ backgroundColor: theme?.accentColor }}>
              <p className="p-2 text-white text-sm font-medium">Accent</p>
            </div>
          </div>
        </div>
      </FormCard>

      <div className="flex gap-3">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
        >
          Save Theme
        </button>
        {saved && (
          <div className="flex items-center gap-2 text-green-600">
            <span>✓</span>
            <span>Theme saved successfully!</span>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <p className="font-medium mb-2">How to Use Global Theme</p>
        <p>
          Ubah warna di sini untuk mengupdate tema global website. Setiap halaman akan menggunakan warna-warna ini,
          kecuali di-override dengan page-specific theme di Pages & Templates.
        </p>
      </div>
    </div>
  )
}
