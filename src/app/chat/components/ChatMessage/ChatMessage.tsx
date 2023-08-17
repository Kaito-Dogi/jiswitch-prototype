import { FC } from "react";

import { ChatImage } from "../ChatImage";

type Props = {
  children: string;
  fromUser: boolean;
  images: (string | ArrayBuffer)[];
};

/**
 * @package
 */
export const ChatMessage: FC<Props> = ({ children, fromUser, images }) => {
  return fromUser ? (
    <div className="flex flex-col items-end gap-1">
      {
        <div className="grid grid-cols-2 gap-1">
          {images.map((image, index) => {
            return <ChatImage src={image} key={index} />;
          })}
        </div>
      }
      <p className="max-w-[70%] rounded-l-lg rounded-tr-lg bg-primary p-2">
        {children}
      </p>
    </div>
  ) : (
    <div className="flex justify-start">
      <p className="max-w-[70%] rounded-r-lg rounded-tl-lg bg-white p-2">
        {children}
      </p>
    </div>
  );
};
