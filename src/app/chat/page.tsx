"use client";

import { useState } from "react";

import { ChatForm } from "./components/ChatForm";
import { ChatMessageList } from "./components/ChatMessageList";
import { Message } from "./models/Message";

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages);

  const onSendButtonClick = (newMessage: Message) => {
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const replyMessage: Message = {
        content: "じすいっちからの返信",
        sender: "jiswitch",
        images: [],
      };
      setMessages((prev) => [...prev, replyMessage]);
    }, 1000);
  };

  return (
    <main className="w-full px-2 pt-4">
      <div className="h-[90vh]">
        <ChatMessageList messages={messages} />
      </div>
      <div className="fixed inset-x-0 bottom-0 m-2 flex justify-center">
        <ChatForm onSendButtonClick={onSendButtonClick}></ChatForm>
      </div>
    </main>
  );
}

const initialMessages: Message[] = [
  {
    content: "おつかれ〜",
    sender: "jiswitch",
    images: [],
  },
  {
    content: "オムライス作ったよ！",
    sender: "user",
    images: [],
  },
  {
    content: "卵がトロトロで美味しそう！ケチャップで書いてる文字もかわいい！",
    sender: "jiswitch",
    images: [],
  },
];
