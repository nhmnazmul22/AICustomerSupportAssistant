import React from "react"
import { Send } from "lucide-react"

const ChatBoxFooter = () => {
  return (
    <div className={"h-16 rounded-b-xl bg-gray-900 flex justify-between items-center px-4 gap-2"}>
      <input
        className={
          "h-full flex-1 bg-transparent outline-0 focus:border-0 focus:ring-0"
        }
        placeholder={'Ask a question !'}
      />
      <div className={"rounded-full w-8 h-8 flex justify-center items-center bg-primary p-2"}>
        <span>
          <Send className={"h-4 w-4"} />
        </span>
      </div>
    </div>
  )
}

export default ChatBoxFooter