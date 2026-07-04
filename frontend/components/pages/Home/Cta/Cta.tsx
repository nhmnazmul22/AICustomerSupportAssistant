import Container from "@/components/common/Container"
import { ArrowRight } from "lucide-react"

const Cta = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      <Container>
        <div className="flex flex-col items-center gap-3 py-28 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            Your docs already have the answers.
          </h2>
          <p className="text-[15.5px] text-muted-foreground">
            Your assistant just finds them faster than your team can type.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
              Create free account
              <ArrowRight className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-50 dark:hover:bg-slate-800/60">
              Log in
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cta
