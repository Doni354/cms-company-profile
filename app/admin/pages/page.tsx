"use client"

import { useState } from "react"
import { companyData } from "@/data/company-data"
import { getAvailableTemplates } from "@/lib/template-registry"
import { FormCard } from "@/components/form-card"
import { FormField } from "@/components/form-field"

export default function PagesPage() {
  const [pages, setPages] = useState(companyData.pages)
  const [selectedPage, setSelectedPage] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>(null)
  const templates = getAvailableTemplates()

  const pageKeys = Object.keys(pages)

  const selectPage = (pageKey: string) => {
    setSelectedPage(pageKey)
    setFormData({ ...pages[pageKey] })
  }

  const updateTemplate = (templateName: string) => {
    setFormData({
      ...formData,
      template: {
        ...formData.template,
        name: templateName,
      },
    })
  }

  const updateTemplateOption = (key: string, value: any) => {
    setFormData({
      ...formData,
      template: {
        ...formData.template,
        templateOptions: {
          ...formData.template.templateOptions,
          [key]: value,
        },
      },
    })
  }

  const updateTheme = (key: string, value: string) => {
    setFormData({
      ...formData,
      template: {
        ...formData.template,
        theme: {
          ...formData.template.theme,
          [key]: value,
        },
      },
    })
  }

  const savePage = () => {
    if (selectedPage) {
      setPages((prev) => ({
        ...prev,
        [selectedPage]: formData,
      }))
      setSelectedPage(null)
      setFormData(null)
    }
  }

  const cancelEdit = () => {
    setSelectedPage(null)
    setFormData(null)
  }

  if (!selectedPage || !formData) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Pages & Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pageKeys.map((pageKey) => (
            <div
              key={pageKey}
              className="bg-card border border-border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
              onClick={() => selectPage(pageKey)}
            >
              <h3 className="font-bold text-foreground capitalize mb-2">{pageKey} Page</h3>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Template:</strong> {pages[pageKey].template.name}
              </p>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const currentTemplate = templates.find((t) => t.id === formData.template.name)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={cancelEdit} className="px-4 py-2 border border-border rounded hover:bg-muted">
          Back
        </button>
        <h2 className="text-2xl font-bold capitalize">Edit {selectedPage} Page</h2>
      </div>

      <FormCard title="Template Selection" description="Choose template for this page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => updateTemplate(template.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.template.name === template.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <h3 className="font-medium text-foreground">{template.name}</h3>
              <p className="text-xs text-muted-foreground mt-2">{template.description}</p>
            </div>
          ))}
        </div>
      </FormCard>

      {currentTemplate && (
        <>
          <FormCard title="Template Options" description="Customize template specific options">
            <div className="space-y-4">
              {Object.entries(formData.template.templateOptions || {}).map(([key, value]) => (
                <FormField key={key} label={key}>
                  {typeof value === "string" || typeof value === "number" ? (
                    <input
                      type={typeof value === "number" ? "number" : "text"}
                      value={value}
                      onChange={(e) =>
                        updateTemplateOption(
                          key,
                          typeof value === "number" ? Number.parseInt(e.target.value) : e.target.value,
                        )
                      }
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    />
                  ) : (
                    <textarea
                      value={JSON.stringify(value, null, 2)}
                      onChange={(e) => {
                        try {
                          updateTemplateOption(key, JSON.parse(e.target.value))
                        } catch (e) {
                          // Invalid JSON, ignore
                        }
                      }}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground font-mono text-sm"
                      rows={4}
                    />
                  )}
                </FormField>
              ))}
            </div>
          </FormCard>

          <FormCard title="Theme Customization" description="Customize colors and styling for this page">
            <div className="space-y-4">
              {Object.entries(formData.template.theme || {}).map(([key, value]) => (
                <FormField key={key} label={key}>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => updateTheme(key, e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  />
                </FormField>
              ))}
            </div>
          </FormCard>
        </>
      )}

      <div className="flex gap-3">
        <button
          onClick={savePage}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
        >
          Save Changes
        </button>
        <button onClick={cancelEdit} className="px-6 py-2 border border-border rounded-lg hover:bg-muted">
          Cancel
        </button>
      </div>
    </div>
  )
}
