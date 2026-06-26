import React from "react"
import { MessageCircle } from "lucide-react"

const ChatBoxHeader = () => {
  return (
    <div className={"flex items-center gap-2 p-4"}>
      <div className={"rounded-full bg-primary p-2"}>
        <span>
          <MessageCircle className={"h-4 w-4"} />
        </span>
      </div>
      <div>
        <h4 className={"text-sm font-semibold"}>Assistant</h4>
        <p className={"flex items-center gap-1 text-xs text-gray-400"}>
          <span
            className={
              "block h-1.5 w-1.5 animate-pulse rounded-full bg-green-600"
            }
          ></span>
          Answers in seconds
        </p>
      </div>
    </div>
  )
}

export default ChatBoxHeader