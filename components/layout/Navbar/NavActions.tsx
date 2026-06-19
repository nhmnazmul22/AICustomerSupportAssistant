import { Button } from "@/components/ui/button"
import { LogIn, Sun, User } from "lucide-react"
import React from "react"

const NavActions = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button variant={`ghost`}>
        <Sun className="h-8 w-8" />
      </Button>
      <Button variant={`default`}>
        <LogIn className="size-4" />
        Login
      </Button>
      <Button variant={`outline`}>
        <User className="size-4" />
        Signup
      </Button>
    </div>
  )
}

export default NavActions
