import Container from "@/components/common/Container"
import React from "react"

const TrustedCompany = () => {
  return (
    <div className="border-y border-border py-2">
      <Container>
        <div className="mx-auto max-w-lg">
          <span className="block text-center text-xs text-muted-foreground">
            Trusted by support teams at
          </span>
          <div className="mt-5 flex items-center justify-center gap-8">
            <span className="text-muted-foreground text-md hover:text-slate-800 dark:hover:text-slate-200 duration-200">Northwind</span>
            <span className="text-muted-foreground text-md hover:text-slate-800 dark:hover:text-slate-200 duration-200">Fenwick</span>{" "}
            <span className="text-muted-foreground text-md hover:text-slate-800 dark:hover:text-slate-200 duration-200">Hollow & Co Pebble</span>
            <span className="text-muted-foreground text-md hover:text-slate-800 dark:hover:text-slate-200 duration-200">Driftwood</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TrustedCompany
