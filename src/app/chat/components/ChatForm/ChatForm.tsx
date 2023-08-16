"use client";

import { ChangeEvent, FC, useState } from "react";

type Props = {
  onSendButtonClick: (message: string) => void;
};

/**
 * @package
 */
export const ChatForm: FC<Props> = ({ onSendButtonClick }) => {
  const [message, setMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onClick = () => {
    if (!message) return;

    onSendButtonClick(message);

    setMessage("");
  };

  return (
    <form className="flex w-full max-w-screen-sm gap-4">
      <label>
        <p className="py-2">📷</p>
        <input name="image" type="file" accept="image/*" className="hidden" />
      </label>
      <input
        name="message"
        value={message}
        onChange={onChange}
        type="text"
        placeholder="メッセージを入力…"
        className="flex-1 rounded-sm p-2"
      />
      <button
        type="button"
        onClick={onClick}
        className="rounded-sm bg-secondary p-2 px-4 text-white"
      >
        送信
      </button>
    </form>
  );
};
