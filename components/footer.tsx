"use client"

import type { CMSConfig } from "@/types/config"

interface FooterProps {
  data: CMSConfig
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{data.company.name}</h3>
            <p className="text-gray-400">{data.company.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {data.navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: {data.company.email}</p>
              <p>Phone: {data.company.phone}</p>
              <p>Address: {data.company.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} {data.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
