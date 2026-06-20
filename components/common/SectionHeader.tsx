import React from "react"

type SectionHeaderProps = {
  subTitle?: string
  title: string
  desc?: string
}

const SectionHeader = ({ subTitle, title, desc }: SectionHeaderProps) => {
  return (
    <div className="mx-auto max-w-xl text-center">
      {subTitle && (
        <span className="text-xs font-semibold tracking-wide text-primary uppercase">
          {subTitle}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
        {title}
      </h2>
      {desc && (
        <p className="mt-3.5 text-[15.5px] leading-relaxed text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
