import { useEffect, useRef } from "react";

import { Message } from "../../models/Message";

/**
 * @package
 */
export const useScrollToBottom = (messages: Message[]) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return bottomRef;
};
