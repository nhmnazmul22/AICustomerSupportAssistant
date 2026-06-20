import { DM_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import { cn } from "@/lib/utils"
import Navbar from "@/components/layout/Navbar/Navbar"
import Footer from "@/components/layout/Footer/Footer"

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
      <body className="bg-white dark:bg-slate-950">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
