import { MessageCircle, Send } from "lucide-react"
import React from "react"

const DemoChatAssistant = () => {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40">
        <div className="flex items-center gap-2.5 border-b border-slate-200 bg-slate-50 px-4 py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex size-7.5 shrink-0 items-center justify-center rounded-full bg-primary">
            <MessageCircle className="size-3.5 text-white" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-900 dark:text-slate-50">
              Assistant
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Answers in seconds
            </div>
          </div>
        </div>

        <div className="flex min-h-55 flex-col gap-3 p-4">
          <div
            className="hero-msg flex max-w-[88%] self-start"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="rounded-xl rounded-bl-sm bg-slate-100 px-3 py-2 text-[13.5px] leading-relaxed text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Hi — ask me anything about pricing, setup, or what makes this
              different.
            </div>
          </div>
          <div
            className="hero-msg flex max-w-[88%] self-end"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="rounded-xl rounded-br-sm bg-primary px-3 py-2 text-[13.5px] leading-relaxed text-white">
              How long does setup take?
            </div>
          </div>
          <div
            className="hero-msg flex max-w-[88%] self-start"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="rounded-xl rounded-bl-sm bg-slate-100 px-3 py-2 text-[13.5px] leading-relaxed text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Most teams are live in under 10 minutes — upload your docs, paste
              one script tag, done.
            </div>
          </div>
        </div>

        {/* demo input */}
        <div className="flex items-center gap-2.5 border-t border-slate-200 px-3.5 py-3 dark:border-slate-800">
          <input
            readOnly
            type="text"
            placeholder="Ask a question..."
            className="flex-1 cursor-pointer bg-transparent text-[13.5px] text-slate-400 outline-none placeholder:text-slate-400 dark:text-slate-500 dark:placeholder:text-slate-500"
          />
          <div className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md bg-primary">
            <Send className="size-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoChatAssistant
