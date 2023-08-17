"use client";

import { FC, useState } from "react";

import { Message } from "../../models/Message";
import { ImagePicker } from "./ImagePicker";
import { PreviewImage } from "./PreviewImage";
import { TextField } from "./TextField";

type Props = {
  onSendButtonClick: (message: Message) => void;
};

/**
 * @package
 */
export const ChatForm: FC<Props> = ({ onSendButtonClick }) => {
  const [message, setMessage] = useState("");
  const [images, setImages] = useState<Message["images"]>([]);

  const onClick = () => {
    if (!message && images.length === 0) return;

    const newMessage: Message = {
      content: message,
      sender: "user",
      images: images,
    };
    onSendButtonClick(newMessage);

    // 状態をリセット
    setMessage("");
    setImages([]);
  };

  return (
    <div className="flex w-full max-w-screen-sm flex-col gap-2">
      <div className="mx-2">
        {!!images.length && (
          <PreviewImage images={images as Message["images"]} />
        )}
      </div>
      <form className="flex gap-4 bg-white p-2">
        <ImagePicker setImages={setImages} />
        <TextField message={message} setMessage={setMessage} />
        <button
          type="button"
          onClick={onClick}
          className="rounded-sm bg-secondary px-4 py-2 text-white"
        >
          送信
        </button>
      </form>
    </div>
  );
};
