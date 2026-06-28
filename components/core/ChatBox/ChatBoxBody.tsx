"use client"
import { useChatActions } from "@/context/ChatActionsContext"
import React from "react"

const ChatBoxBody = () => {
  const { chats, bottomRef } = useChatActions()

  return (
    <div
      className={
        "hide-scrollbar flex max-h-125 flex-1 flex-col gap-3 overflow-y-auto border-y border-gray-800 bg-gray-900 p-4"
      }
    >
      {chats &&
        chats?.length > 0 &&
        chats?.map((chat) => (
          <div
            key={chat.id}
            className={`my-1 flex ${
              chat.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {chat.sender === "user" ? (
              <div className="w-[50%] rounded-lg bg-primary p-3">
                {chat.message}
              </div>
            ) : (
              <div className="w-[50%] rounded-lg bg-gray-800 p-3">
                {chat.message}
              </div>
            )}
          </div>
        ))}

      <div ref={bottomRef}></div>
    </div>
  )
}

export default ChatBoxBody
