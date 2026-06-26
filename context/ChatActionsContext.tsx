'use client';

import { createContext, ReactNode, useContext, useState } from "react"

type ChatActionContextType = {
  isChatBoxOpen: boolean
  toggleBoxOpen: () => void
}

export const ChatActionsContext = createContext<ChatActionContextType | null>(
  null
)

export const ChatActionsProvider = ({ children }: { children: ReactNode }) => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState<boolean>(false)

  const toggleBoxOpen = () => setIsChatBoxOpen((prev) => !prev)

  return (
    <ChatActionsContext value={{ isChatBoxOpen, toggleBoxOpen }}>
      <div className={'relative'}>{children}</div>
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
