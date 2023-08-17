"use client";

import { FC } from "react";

import { Message } from "../../models/Message";
import { ChatMessage } from "../ChatMessage";
import { useScrollToBottom } from "./useScrollToBottom";

type Props = {
  messages: Message[];
};

/**
 * @package
 */
export const ChatMessageList: FC<Props> = ({ messages }) => {
  const bottomRef = useScrollToBottom(messages);

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-scroll px-2 pt-2">
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
      <div ref={bottomRef}></div>
    </div>
  );
};
