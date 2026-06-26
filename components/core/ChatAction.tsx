"use client";

import { MessageCircle } from "lucide-react";
import { useChatActions } from "@/context/ChatActionsContext"

const ChatAction = () => {
  const {toggleBoxOpen} = useChatActions()

  return (
    <button onClick={toggleBoxOpen} className="fixed right-5 bottom-5 block">
      <div className="relative rounded-full">
        <span className="absolute left-0 inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
        <div className="relative z-10 rounded-full bg-primary p-4">
          <MessageCircle className="h-7 w-7 text-white" />
        </div>
      </div>
    </button>
  )
};

export default ChatAction;