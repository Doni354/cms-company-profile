import { getAvailableTemplates } from "@/lib/template-registry"

export const metadata = {
  title: "Admin - Template Showcase",
}

export default function AdminPage() {
  const templates = getAvailableTemplates()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Template Registry</h1>
        <p className="text-gray-600 mb-12">Berikut adalah daftar semua template yang tersedia untuk halaman:</p>

        <div className="grid gap-8">
          {templates.map((template) => (
            <div key={template.id} className="bg-white p-8 rounded-lg shadow">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{template.name}</h2>
                <p className="text-gray-600">{template.description}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm overflow-auto">
                <pre>
                  {JSON.stringify(
                    {
                      templateName: template.id,
                      example: {
                        template: {
                          name: template.id,
                          templateOptions: {
                            title: "Example Title",
                            subtitle: "Example Subtitle",
                          },
                          theme: {
                            backgroundColor: "bg-white",
                            accentColor: "blue",
                          },
                        },
                        sectionIds: ["services", "team"],
                      },
                    },
                    null,
                    2,
                  )}
                </pre>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Cara menggunakan di company-data.ts:</strong>
                </p>
                <code className="block bg-white p-3 border border-gray-200 rounded text-xs">
                  pages: {"{"} pageName: {"{"} template: {"{name: "}
                  {template.id}
                  {'"}'} {"}"} {"}"}
                </code>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Dokumentasi Lengkap</h3>
          <p className="text-blue-800 mb-4">
            Untuk dokumentasi lengkap tentang CMS system, buka file{" "}
            <code className="bg-white px-2 py-1 rounded">CMS_GUIDE.md</code>
          </p>
          <ul className="space-y-2 text-blue-800">
            <li>• Cara menggunakan template selection</li>
            <li>• Theme customization system</li>
            <li>• Praktik terbaik untuk customization</li>
            <li>• Firebase integration nanti</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
