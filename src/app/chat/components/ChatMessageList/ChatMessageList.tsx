import { FC } from "react";

import { Message } from "../../models/Message";
import { ChatMessage } from "../ChatMessage";

type Props = {
  messages: Message[];
};

/**
 * @package
 */
export const ChatMessageList: FC<Props> = ({ messages }) => {
  return (
    <div className="flex flex-col gap-4">
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
    </div>
  );
};
