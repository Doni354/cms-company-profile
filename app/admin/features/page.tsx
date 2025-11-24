"use client"

import { useState } from "react"
import { companyData } from "@/data/company-data"
import { FormCard } from "@/components/form-card"
import { FormField } from "@/components/form-field"

export default function FeaturesPage() {
  const [features, setFeatures] = useState(companyData.content.features)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>(null)

  const startEdit = (feature: any) => {
    setEditingId(feature.id)
    setFormData({ ...feature })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setFormData(null)
  }

  const saveEdit = () => {
    setFeatures((prev) => prev.map((f) => (f.id === editingId ? formData : f)))
    cancelEdit()
  }

  const addFeature = () => {
    const newId = `feature-${Date.now()}`
    const newFeature = {
      id: newId,
      title: "New Feature",
      description: "Feature description",
    }
    setFeatures((prev) => [...prev, newFeature])
    startEdit(newFeature)
  }

  const deleteFeature = (id: string) => {
    setFeatures((prev) => prev.filter((f) => f.id !== id))
  }

  return (
    <div className="space-y-6">
      {editingId ? (
        <FormCard title="Edit Feature" description="Update feature information">
          <div className="space-y-6">
            <FormField label="Title">
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              />
            </FormField>

            <FormField label="Description">
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              />
            </FormField>

            <div className="flex gap-3">
              <button
                onClick={saveEdit}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                Save
              </button>
              <button onClick={cancelEdit} className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
                Cancel
              </button>
            </div>
          </div>
        </FormCard>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Features</h2>
            <button
              onClick={addFeature}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Add Feature
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.id} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(feature)}
                    className="flex-1 px-3 py-2 border border-border rounded hover:bg-muted text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteFeature(feature.id)}
                    className="flex-1 px-3 py-2 border border-border rounded hover:bg-destructive/10 text-sm text-destructive"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
