"use client"

import { ChatType } from "@/types"
import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

type ChatActionContextType = {
  isChatBoxOpen: boolean
  chats: ChatType[] | null
  chatFrom: ChatType
  bottomRef: RefObject<HTMLDivElement | null>
  handleSubmit: (chat: ChatType) => void
  toggleBoxOpen: () => void
  changeFormData: <K extends keyof ChatType>(
    field: K,
    value: ChatType[K]
  ) => void
}

export const ChatActionsContext = createContext<ChatActionContextType | null>(
  null
)

// Validate from
const validateChatFrom = (form: ChatType) => {
  console.log("from", form)
  if (form.message.trim().length === 0) return false

  return true
}

export const ChatActionsProvider = ({ children }: { children: ReactNode }) => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState<boolean>(false)
  const [chats, setChats] = useState<ChatType[] | null>(null)
  const [chatFrom, setChatFrom] = useState<ChatType>({
    id: "",
    sender: "user",
    message: "",
  })
  const bottomRef = useRef<HTMLDivElement>(null)

  const toggleBoxOpen = () => setIsChatBoxOpen((prev) => !prev)

  const changeFormData = <K extends keyof ChatType>(
    field: K,
    value: ChatType[K]
  ) => {
    setChatFrom((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = useCallback(
    (chat: ChatType) => {
      try {
        const result = validateChatFrom(chatFrom)

        if (!result) {
          console.error("Please input a message")
          return
        }
        setChats((prev) =>
          prev
            ? [...prev, { ...chat, id: prev.length + 1 }]
            : [{ ...chat, id: 1 }]
        )
        setChatFrom({
          id: "",
          sender: "user",
          message: "",
        })
        setChats(
          (prev) =>
            prev && [
              ...prev,
              {
                id: prev?.length + 1,
                message: "processing...",
                sender: "agent",
              },
            ]
        )
      } finally {
        setTimeout(() => {
          setChats((prev) => {
            return (
              prev && [
                ...prev,
                {
                  id: prev?.length + 1,
                  message: "Hi I am your assistant, How i can help you?",
                  sender: "agent",
                },
              ]
            )
          })
        }, 1000)
      }
    },
    [chatFrom]
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit(chatFrom)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [chatFrom, handleSubmit])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [chats])

  return (
    <ChatActionsContext
      value={{
        isChatBoxOpen,
        chats,
        chatFrom,
        bottomRef,
        handleSubmit,
        toggleBoxOpen,
        changeFormData,
      }}
    >
      <div className={"relative"}>{children}</div>
    </ChatActionsContext>
  )
}

export const useChatActions = () => {
  const context = useContext(ChatActionsContext)

  if (!context) {
    throw new Error("useChatActions must be inside the ChatActionsProvider")
  }

  return context
}
