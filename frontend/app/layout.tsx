import { DM_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import { cn } from "@/lib/utils"
import Navbar from "@/components/layout/Navbar/Navbar"
import Footer from "@/components/layout/Footer/Footer"
import ChatAction from "@/components/core/ChatAction"
import { ChatActionsProvider } from "@/context/ChatActionsContext"
import ChatBox from "@/components/core/ChatBox/ChatBox"

const DMSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", DMSans.variable)}
    >
      <body className="relative bg-white dark:bg-slate-950">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <ChatActionsProvider>
            <ChatBox/>
            <ChatAction />
          </ChatActionsProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
