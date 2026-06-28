"use client"
import { Send } from "lucide-react"
import { useChatActions } from "@/context/ChatActionsContext"

const ChatBoxFooter = () => {
  const { handleSubmit, chatFrom, changeFormData } = useChatActions()

  return (
    <div
      className={
        "flex h-16 items-center justify-between gap-2 rounded-b-xl bg-gray-900 px-4"
      }
    >
      <input
        className={
          "h-full flex-1 bg-transparent outline-0 focus:border-0 focus:ring-0"
        }
        placeholder={"Ask a question !"}
        value={chatFrom.message}
        onChange={(e) => changeFormData("message", e.target.value)}
      />
      <button
        className={
          "flex h-8 w-8 items-center justify-center rounded-lg bg-primary p-2"
        }
        onClick={() => handleSubmit(chatFrom)}
      >
        <span>
          <Send className={"h-4 w-4"} />
        </span>
      </button>
    </div>
  )
}

export default ChatBoxFooter
