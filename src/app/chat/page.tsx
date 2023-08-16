"use client";

import { useState } from "react";

import { ChatForm } from "./components/ChatForm";
import { ChatMessageList } from "./components/ChatMessageList";
import { Message } from "./models/Message";

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages);

  const onSendButtonClick = (message: string) => {
    const newMessage: Message = { content: message, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const replyMessage: Message = {
        content: "じすいっちからの返信",
        sender: "jiswitch",
      };
      setMessages((prev) => [...prev, replyMessage]);
    }, 1000);
  };

  return (
    <main className="w-full px-2 pt-4">
      <ChatMessageList messages={messages} />
      <div className="absolute inset-x-0 bottom-0 m-2 flex justify-center">
        <ChatForm onSendButtonClick={onSendButtonClick}></ChatForm>
      </div>
    </main>
  );
}

const initialMessages: Message[] = [
  {
    content: "おつかれ〜",
    sender: "jiswitch",
  },
  {
    content: "オムライス作ったよ！",
    sender: "user",
  },
  {
    content: "卵がトロトロで美味しそう！ケチャップで書いてる文字もかわいい！",
    sender: "jiswitch",
  },
];
