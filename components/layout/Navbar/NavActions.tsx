"use client"

import { Button } from "@/components/ui/button"
import { LogIn, UserPlus } from "lucide-react"
import React from "react"

const NavActions = () => {
  return (
    <div className="flex items-center justify-end gap-2.5">
      <Button
        variant="ghost"
        className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
      >
        <LogIn className="size-4" />
        Login
      </Button>
      <Button className="shadow-sm">
        <UserPlus className="size-4" />
        Sign up
      </Button>
    </div>
  )
}

export default NavActions
