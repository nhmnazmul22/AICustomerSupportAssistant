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
        className={`fixed z-50 right-7.5 bottom-25 h-125 max-h-125 w-125 max-w-125 rounded-[20px] bg-gray-800 flex flex-col`}
      >
        {/*  Chatbox Header */}
        <ChatBoxHeader />
        {/* Chatbox   body */}
        <ChatBoxBody/>
        {/*  Chatbox footer */}
        <ChatBoxFooter/>
      </div>
    )
  )
}

export default ChatBox
