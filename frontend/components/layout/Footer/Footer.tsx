import Container from "@/components/common/Container"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <div className="flex flex-col items-center gap-5 py-3 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <MessageCircle className="size-3.5" />
            </span>
            AI Customer Support
          </div>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-slate-900 dark:hover:text-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Customer Support
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
