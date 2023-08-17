"use client";

import { FC, useEffect, useRef } from "react";

import { Message } from "../../models/Message";
import { ChatMessage } from "../ChatMessage";

type Props = {
  messages: Message[];
};

/**
 * @package
 */
export const ChatMessageList: FC<Props> = ({ messages }) => {
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-scroll pt-2">
      {messages.map((message, index) => {
        return (
          <ChatMessage
            key={index}
            fromUser={message.sender === "user"}
            images={message.images}
          >
            {message.content}
          </ChatMessage>
        );
      })}
      <div ref={endOfMessagesRef}></div>
    </div>
  );
};
