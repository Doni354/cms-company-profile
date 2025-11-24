"use client"

import { useState } from "react"
import { companyData } from "@/data/company-data"
import { FormCard } from "@/components/form-card"
import { FormField } from "@/components/form-field"

export default function ServicesPage() {
  const [services, setServices] = useState(companyData.content.services)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>(null)

  const startEdit = (service: any) => {
    setEditingId(service.id)
    setFormData({ ...service })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setFormData(null)
  }

  const saveEdit = () => {
    setServices((prev) => prev.map((s) => (s.id === editingId ? formData : s)))
    cancelEdit()
  }

  const addService = () => {
    const newId = `service-${Date.now()}`
    const newService = {
      id: newId,
      title: "New Service",
      description: "Service description",
    }
    setServices((prev) => [...prev, newService])
    startEdit(newService)
  }

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id))
  }

  return (
    <div className="space-y-6">
      {editingId ? (
        <FormCard title="Edit Service" description="Update service information">
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
            <h2 className="text-2xl font-bold">Services</h2>
            <button
              onClick={addService}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Add Service
            </button>
          </div>

          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(service)}
                    className="flex-1 px-3 py-2 border border-border rounded hover:bg-muted text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteService(service.id)}
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
