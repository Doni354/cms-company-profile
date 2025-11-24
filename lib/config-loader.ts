import { companyData } from "@/data/company-data"
import type { CMSConfig } from "@/types/config"

export async function loadCMSConfig(): Promise<CMSConfig> {
  try {
    return companyData
  } catch (error) {
    console.error("Failed to load CMS config:", error)
    throw error
  }
}

// Helper untuk mendapatkan page config tertentu
export function getPageConfig(pageKey: string) {
  return companyData.pages[pageKey]
}

// Helper untuk mendapatkan content
export function getContent(contentKey: string) {
  return companyData.content[contentKey]
}
