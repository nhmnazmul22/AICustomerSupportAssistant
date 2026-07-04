"use client"

import React from "react"
import { useChatActions } from "@/context/ChatActionsContext"
import ChatBoxHeader from "@/components/core/ChatBox/ChatBoxHeader"
import ChatBoxBody from "@/components/core/ChatBox/ChatBoxBody"
import ChatBoxFooter from "@/components/core/ChatBox/ChatBoxFooter"

const ChatBox = () => {
  const { isChatBoxOpen } = useChatActions()
  return (
    isChatBoxOpen && (
      <div
        className={`fixed right-7 bottom-22 z-50 flex h-[calc(100dvh-10rem)] max-h-175 w-[calc(100vw-2rem)] max-w-125 flex-col rounded-2xl bg-gray-800`}
      >
        {/*  Chatbox Header */}
        <ChatBoxHeader />
        {/* Chatbox   body */}
        <ChatBoxBody />
        {/*  Chatbox footer */}
        <ChatBoxFooter />
      </div>
    )
  )
}

export default ChatBox
