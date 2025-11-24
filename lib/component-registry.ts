import { templateRegistry } from "./template-registry"

export const componentRegistry = Object.entries(templateRegistry).reduce(
  (acc, [key, value]) => {
    acc[key] = {
      name: value.name,
      description: value.description,
      variants: ["default"],
      defaultVariant: "default",
    }
    return acc
  },
  {} as Record<
    string,
    {
      name: string
      description: string
      variants: string[]
      defaultVariant: string
    }
  >,
)
