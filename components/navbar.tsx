"use client"

import Link from "next/link"
import type { CMSConfig } from "@/types/config"

interface NavbarProps {
  data: CMSConfig
}

export default function Navbar({ data }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              {data.company.name}
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex gap-8">
            {data.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  )
}
