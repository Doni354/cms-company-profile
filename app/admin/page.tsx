"use client"

import { companyData } from "@/data/company-data"
import { getAvailableTemplates } from "@/lib/template-registry"
import Link from "next/link"

export default function AdminDashboard() {
  const templates = getAvailableTemplates()
  const stats = [
    { label: "Company Pages", value: Object.keys(companyData.pages).length },
    { label: "Team Members", value: companyData.content.team.length },
    { label: "Services", value: companyData.content.services.length },
    { label: "Features", value: companyData.content.features.length },
    { label: "Available Templates", value: templates.length },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/company"
            className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-center"
          >
            <div className="text-2xl mb-2">🏢</div>
            <p className="font-medium text-sm">Company Info</p>
          </Link>
          <Link
            href="/admin/team"
            className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-center"
          >
            <div className="text-2xl mb-2">👥</div>
            <p className="font-medium text-sm">Team</p>
          </Link>
          <Link
            href="/admin/services"
            className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-center"
          >
            <div className="text-2xl mb-2">⚙️</div>
            <p className="font-medium text-sm">Services</p>
          </Link>
          <Link
            href="/admin/features"
            className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-center"
          >
            <div className="text-2xl mb-2">✨</div>
            <p className="font-medium text-sm">Features</p>
          </Link>
          <Link
            href="/admin/pages"
            className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-center"
          >
            <div className="text-2xl mb-2">📄</div>
            <p className="font-medium text-sm">Pages & Templates</p>
          </Link>
          <Link
            href="/admin/theme"
            className="p-4 border border-border rounded-lg hover:bg-muted transition-colors text-center"
          >
            <div className="text-2xl mb-2">🎨</div>
            <p className="font-medium text-sm">Theme</p>
          </Link>
        </div>
      </div>

      {/* Current Configuration */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Current Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-foreground mb-3">Company Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Name:</strong> {companyData.company.name}
              </p>
              <p>
                <strong>Email:</strong> {companyData.company.email}
              </p>
              <p>
                <strong>Phone:</strong> {companyData.company.phone}
              </p>
              <p>
                <strong>Address:</strong> {companyData.company.address}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-3">Pages & Templates</h3>
            <div className="space-y-2 text-sm">
              {Object.entries(companyData.pages).map(([page, config]) => (
                <div key={page} className="flex justify-between items-center p-2 bg-muted rounded">
                  <span className="font-medium capitalize text-foreground">{page}</span>
                  <span className="text-muted-foreground text-xs">{config.template.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Available Templates */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Available Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="border border-border rounded-lg p-4">
              <h3 className="font-medium text-foreground">{template.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{template.description}</p>
              <p className="text-xs text-muted-foreground mt-3 font-mono">ID: {template.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
