import type React from "react"
export function FormField({
  label,
  description,
  children,
}: {
  label: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      {description && <p className="text-xs text-muted-foreground mb-2">{description}</p>}
      {children}
    </div>
  )
}
