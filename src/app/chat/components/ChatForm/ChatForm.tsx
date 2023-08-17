"use client";

import Image from "next/image";
import { ChangeEvent, FC, useState } from "react";

import { Message } from "../../models/Message";

type Props = {
  onSendButtonClick: (message: Message) => void;
};

/**
 * @package
 */
export const ChatForm: FC<Props> = ({ onSendButtonClick }) => {
  const [message, setMessage] = useState("");
  const [images, setImages] = useState<
    (string | ArrayBuffer | null | undefined)[]
  >([]);

  const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onChangeImages = (e: ChangeEvent<HTMLInputElement>) => {
    // 何も選択されなかったら処理を中断
    const length = e.target.files?.length || 0;
    if (length === 0) return;

    // 元々表示されていたプレビュー画像を削除
    setImages([]);

    // 選択された画像の枚数分処理を実行
    [...Array(length)].map((_, index) => {
      const reader = new FileReader();

      // 画像読み込み後の処理を定義
      reader.onload = (pe: ProgressEvent<FileReader>) => {
        setImages((prev) => [...prev, pe.target?.result]);
      };

      const file = e.target.files?.[index];
      if (!file) return;
      if (!file.type.match("image.*")) return;

      reader.readAsDataURL(file);
    });
  };

  const onClick = () => {
    if (!message) return;

    const newMessage: Message = {
      content: message,
      sender: "user",
      images: images,
    };
    onSendButtonClick(newMessage);

    setMessage("");
    setImages([]);
  };

  return (
    <div className="flex w-full max-w-screen-sm flex-col justify-center gap-2">
      <div className="flex gap-4 overflow-x-scroll">
        {images.map((image, index) => {
          return (
            !!image && (
              <Image
                src={image as string}
                alt="画像"
                width={0}
                height={0}
                key={index}
                className="h-20 w-20 object-cover"
              />
            )
          );
        })}
      </div>
      <form className="flex gap-4">
        <label>
          <p className="py-2">📷</p>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={onChangeImages}
            multiple
            className="hidden"
          />
        </label>
        <input
          name="message"
          type="text"
          value={message}
          placeholder="メッセージを入力…"
          onChange={onChangeMessage}
          className="grow rounded-sm p-2"
        />
        <button
          type="button"
          onClick={onClick}
          className="rounded-sm bg-secondary p-2 px-4 text-white"
        >
          送信
        </button>
      </form>
    </div>
  );
};
