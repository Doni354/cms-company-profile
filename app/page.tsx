import { companyData } from "@/data/company-data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageRenderer from "@/components/page-renderer"

export const metadata = {
  title: `${companyData.company.name} - Solusi Teknologi Terdepan`,
  description: companyData.company.description,
}

export default function Home() {
  return (
    <>
      <Navbar data={companyData} />
      <main>
        <PageRenderer pageKey="home" data={companyData} />
      </main>
      <Footer data={companyData} />
    </>
  )
}
