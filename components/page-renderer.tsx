"use client"
import type { CMSConfig } from "@/types/config"
import { getTemplate } from "@/lib/template-registry"

interface PageRendererProps {
  pageKey: string
  data: CMSConfig
}

export default function PageRenderer({ pageKey, data }: PageRendererProps) {
  const pageConfig = data.pages[pageKey]

  if (!pageConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl">Halaman {pageKey} tidak ditemukan</p>
      </div>
    )
  }

  const template = getTemplate(pageConfig.template.name)

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl">Template "{pageConfig.template.name}" tidak ditemukan</p>
      </div>
    )
  }

  const TemplateComponent = template.component

  return <TemplateComponent config={pageConfig.template} data={data} sections={pageConfig.sectionIds} />
}
