import Container from "@/components/common/Container"
import SectionHeader from "@/components/common/SectionHeader"
import React from "react"
import SetupStepCard from "./SetupStepCard"
import { setupSteps } from "@/constants"

const Setup = () => {
  return (
    <div className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="py-24">
          <SectionHeader
            subTitle="Setup"
            title="Three steps to a working assistant"
          />
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {setupSteps.map((step) => (
              <SetupStepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Setup
