import React from "react"
import type { SetupStep } from "@/types"

type SetupStepCardProps = {
  step: SetupStep
}

const SetupStepCard = ({ step }: SetupStepCardProps) => {
  return (
    <div>
      <span className="block text-sm font-semibold text-primary">
        {step.number}
      </span>
      <h3 className="mt-3.5 text-base font-medium tracking-tight text-slate-900 dark:text-slate-50">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </div>
  )
}

export default SetupStepCard
