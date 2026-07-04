import React from "react"
import FeatureCard from "./FeatureCard"
import { features } from "@/constants"

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200
     md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-slate-800 dark:border-slate-800">
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  )
}

export default FeatureGrid
