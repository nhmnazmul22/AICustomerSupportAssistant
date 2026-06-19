import { MessageCircle } from "lucide-react"
import Container from "@/components/common/Container"
import NavMenu from "@/components/layout/Navbar/NavMenu"
import NavActions from "@/components/layout/Navbar/NavActions"

const Navbar = () => {
  return (
    <div className="border-b border-slate-300">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="py-2 text-2xl font-semibold">
            <span className="flex items-center gap-1">
              <MessageCircle />
              AI Customer support
            </span>
          </div>
          {/* Navigation Menu */}
          <div>
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
