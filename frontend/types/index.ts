import { LucideIcon } from "lucide-react"

export type FeatureItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type SetupStep = {
  number: string
  title: string
  description: string
}

export type FooterLink = {
  label: string
  href: string
}

export type ChatType = {
  id: string | number
  sender: "user" | "agent"
  message: string
}
