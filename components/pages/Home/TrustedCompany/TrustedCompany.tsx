import Container from "@/components/common/Container"
import React from "react"

const TrustedCompany = () => {
  return (
    <div className="border-y border-border py-2">
      <Container>
        <div className="">
          <span className="block text-center text-xs text-muted-foreground">
            Trusted by support teams at
          </span>
          <div className="mt-5 flex items-center justify-center gap-15">
            <span className="text-md font-medium text-muted-foreground duration-200 hover:text-slate-800 dark:hover:text-slate-200">
              Northwind
            </span>
            <span className="text-md font-medium text-muted-foreground duration-200 hover:text-slate-800 dark:hover:text-slate-200">
              Fenwick
            </span>{" "}
            <span className="text-md font-medium text-muted-foreground duration-200 hover:text-slate-800 dark:hover:text-slate-200">
              Hollow & Co
            </span>
            <span className="text-md font-medium text-muted-foreground duration-200 hover:text-slate-800 dark:hover:text-slate-200">
              Pebble
            </span>
            <span className="text-md font-medium text-muted-foreground duration-200 hover:text-slate-800 dark:hover:text-slate-200">
              Driftwood
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TrustedCompany
