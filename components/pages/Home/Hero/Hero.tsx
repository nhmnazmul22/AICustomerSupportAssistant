import Container from "@/components/common/Container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import DemoChatAssistant from "./DemoChatAssistant"

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-30 left-1/2 h-140 w-200 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20"
      />

      <Container>
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-4 pt-22 pb-16 text-center md:pt-28">
          <span className="dark:border-blue/60 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-3 py-1.5 text-xs font-medium text-primary dark:bg-primary/10 dark:text-blue-300">
            <span className="size-1.5 rounded-full bg-primary" />
            Now answering from your docs in real time
          </span>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
            Support that already{" "}
            <span className="text-slate-400 dark:text-slate-500">
              read the manual.
            </span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Upload your docs once. Your assistant answers customer questions
            instantly, in your voice, around the clock — no scripts to write.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Button className="inline-flex items-center gap-2 rounded-lg px-5 py-6 text-sm font-medium text-white shadow-sm transition-colors">
              Start free
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant={"outline"}
              className="inline-flex items-center gap-2 rounded-lg border-gray-300 px-5 py-6 dark:border-border"
            >
              Try the demo below
            </Button>
          </div>

          <div className="mt-12 w-full max-w-sm">
            <DemoChatAssistant />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
