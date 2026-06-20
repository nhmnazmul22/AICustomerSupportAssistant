import { MessageCircle } from "lucide-react"
import Container from "@/components/common/Container"
import NavMenu from "@/components/layout/Navbar/NavMenu"
import NavActions from "@/components/layout/Navbar/NavActions"

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md supports-backdrop-filter:bg-white/60 dark:border-slate-800 dark:bg-slate-950 dark:supports-backdrop-filter:bg-slate-950/60">
      <Container>
        <div className="flex h-8 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            <span className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MessageCircle className="size-4.5" />
              </span>
              <span className="hidden sm:inline">AI Customer Support</span>
              <span className="sm:hidden">AI CS</span>
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <NavMenu />
          </div>

          {/* Login/Signup Actions */}
          <div>
            <NavActions />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
