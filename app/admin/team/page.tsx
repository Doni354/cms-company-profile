"use client"

import { useState } from "react"
import { companyData } from "@/data/company-data"
import { FormCard } from "@/components/form-card"
import { FormField } from "@/components/form-field"

export default function TeamPage() {
  const [team, setTeam] = useState(companyData.content.team)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>(null)

  const startEdit = (member: any) => {
    setEditingId(member.id)
    setFormData({ ...member })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setFormData(null)
  }

  const saveEdit = () => {
    setTeam((prev) => prev.map((m) => (m.id === editingId ? formData : m)))
    cancelEdit()
  }

  const addMember = () => {
    const newId = `member-${Date.now()}`
    const newMember = {
      id: newId,
      name: "New Member",
      position: "Position",
      image: "/placeholder.svg",
      bio: "",
    }
    setTeam((prev) => [...prev, newMember])
    startEdit(newMember)
  }

  const deleteMember = (id: string) => {
    setTeam((prev) => prev.filter((m) => m.id !== id))
  }

  return (
    <div className="space-y-6">
      {editingId ? (
        <FormCard title="Edit Team Member" description="Update member information">
          <div className="space-y-6">
            <FormField label="Name">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              />
            </FormField>

            <FormField label="Position">
              <input
                type="text"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              />
            </FormField>

            <FormField label="Image URL">
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              />
            </FormField>

            <FormField label="Bio">
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={3}
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
            <h2 className="text-2xl font-bold">Team Members</h2>
            <button
              onClick={addMember}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Add Member
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {team.map((member) => (
              <div key={member.id} className="bg-card border border-border rounded-lg p-4">
                <div className="flex gap-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.position}</p>
                    <p className="text-xs text-muted-foreground mt-1">{member.bio}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => startEdit(member)}
                    className="flex-1 px-3 py-2 border border-border rounded hover:bg-muted text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteMember(member.id)}
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
