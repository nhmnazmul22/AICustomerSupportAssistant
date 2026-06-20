"use client"

import * as React from "react"
import Link from "next/link"
import {
  BotIcon,
  InboxIcon,
  BarChart3Icon,
  WorkflowIcon,
  BookOpenIcon,
  LifeBuoyIcon,
  PlugIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const features: {
  title: string
  href: string
  description: string
  icon: React.ElementType
}[] = [
  {
    title: "AI Inbox",
    href: "/features/inbox",
    description:
      "A unified inbox that triages, drafts, and resolves tickets automatically.",
    icon: InboxIcon,
  },
  {
    title: "AI Agent",
    href: "/features/agent",
    description:
      "A trained assistant that handles conversations end-to-end across channels.",
    icon: BotIcon,
  },
  {
    title: "Workflows",
    href: "/features/workflows",
    description:
      "Automate routing, escalation, and follow-ups with no-code rules.",
    icon: WorkflowIcon,
  },
  {
    title: "Analytics",
    href: "/features/analytics",
    description:
      "Track resolution time, CSAT, and deflection rate in one dashboard.",
    icon: BarChart3Icon,
  },
]

const resources: {
  title: string
  href: string
  description: string
  icon: React.ElementType
}[] = [
  {
    title: "Help Center",
    href: "/resources/help-center",
    description: "Guides and answers for setting up and using the platform.",
    icon: LifeBuoyIcon,
  },
  {
    title: "Integrations",
    href: "/resources/integrations",
    description:
      "Connect your existing tools: Slack, Zendesk, Shopify, and more.",
    icon: PlugIcon,
  },
]

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-100 gap-1 p-1 md:w-125 md:grid-cols-2 lg:w-150">
              {features.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-90 gap-1 p-1">
              {resources.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/docs">Docs</Link>}
          />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/pricing">Pricing</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  icon: React.ElementType
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className="flex-row items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/60"
          >
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <Icon className="size-4" />
            </span>
            <div className="flex flex-col gap-0.5 text-sm">
              <div className="leading-none font-medium text-slate-900 dark:text-slate-50">
                {title}
              </div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  )
}

export default NavMenu
