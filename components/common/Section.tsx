import React, { ReactNode } from "react"

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="py-5">{children}</section>
}

export default Section
