import { FeatureItem } from "@/types"
import {
  BotMessageSquare,
  FileStack,
  Clock,
  BarChart3,
  Code2,
  Users,
} from "lucide-react"

export const features: FeatureItem[] = [
  {
    icon: BotMessageSquare,
    title: "Grounded answers",
    description:
      "Every response is pulled from the docs you upload — no improvising, no made-up policies.",
  },
  {
    icon: FileStack,
    title: "Any file format",
    description:
      "PDFs, help center exports, CSVs, or plain text. Drop them in and they're searchable in minutes.",
  },
  {
    icon: Clock,
    title: "Always on",
    description:
      "Answers customers at 2am the same way it does at 2pm — consistent, on-brand, no queue.",
  },
  {
    icon: BarChart3,
    title: "Built-in analytics",
    description:
      "See what customers ask most, where the bot struggles, and what's missing from your docs.",
  },
  {
    icon: Code2,
    title: "One script tag",
    description:
      "Drop a single line into your site and the widget appears, fully styled to match your brand.",
  },
  {
    icon: Users,
    title: "Hands off to a human",
    description:
      "When it's unsure, it says so and routes the conversation to your team instead of guessing.",
  },
]
