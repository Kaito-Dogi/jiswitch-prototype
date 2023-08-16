"use client";

import { ChatMessageList } from "./components/ChatMessageList";
import { Message } from "./models/Message";

export default function Chat() {
  return (
    <main className="w-full px-2 pt-4">
      <ChatMessageList messages={messages} />
    </main>
  );
}

const messages: Message[] = [
  {
    content: "あああ",
    sender: "user",
  },
  {
    content: "あああ",
    sender: "jiswitch",
  },
  {
    content: "ああああああああああああああああああ",
    sender: "user",
  },
];
