"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const menuItems = [
    { label: "Dashboard", href: "/admin", icon: "📊" },
    { label: "Company Info", href: "/admin/company", icon: "🏢" },
    { label: "Team", href: "/admin/team", icon: "👥" },
    { label: "Services", href: "/admin/services", icon: "⚙️" },
    { label: "Features", href: "/admin/features", icon: "✨" },
    { label: "Pages & Templates", href: "/admin/pages", icon: "📄" },
    { label: "Theme", href: "/admin/theme", icon: "🎨" },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300`}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          <div className={`font-bold text-lg ${!sidebarOpen && "hidden"}`}>CMS Admin</div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-sidebar-accent rounded-lg">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              <span className={`${!sidebarOpen && "hidden"}`}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <header className="mb-8 pb-6 border-b border-border">
            <h1 className="text-3xl font-bold">CMS Administration</h1>
            <p className="text-muted-foreground mt-2">Kelola konten dan template website Anda</p>
          </header>
          {children}
        </div>
      </main>
    </div>
  )
}
