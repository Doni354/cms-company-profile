import { companyData } from "@/data/company-data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageRenderer from "@/components/page-renderer"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    page: string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { page } = await params

  if (!companyData.pages[page]) {
    return {
      title: "Page Not Found",
    }
  }

  return {
    title: `${companyData.company.name} - ${page.charAt(0).toUpperCase() + page.slice(1)}`,
    description: companyData.company.description,
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { page } = await params

  if (!companyData.pages[page]) {
    notFound()
  }

  return (
    <>
      <Navbar data={companyData} />
      <main>
        <PageRenderer pageKey={page} data={companyData} />
      </main>
      <Footer data={companyData} />
    </>
  )
}
