import React from "react"
import type { FeatureItem } from "@/types"

type FeatureCardProps = {
  feature: FeatureItem
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { icon: Icon, title, description } = feature

  return (
    <div className="bg-white p-7 duration-300 hover:bg-primary/10 dark:bg-slate-900 dark:hover:bg-primary/5">
      <div className="mb-4.5 flex size-9 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4.5 text-primary" />
      </div>
      <h3 className="mb-2 text-base font-medium tracking-tight text-slate-900 dark:text-slate-50">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
