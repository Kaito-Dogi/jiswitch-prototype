import Image from "next/image";
import { FC } from "react";

type Props = {
  children: string;
  fromUser: boolean;
  images: (string | ArrayBuffer | null | undefined)[];
};

/**
 * @package
 */
export const ChatMessage: FC<Props> = ({ children, fromUser, images }) => {
  return fromUser ? (
    <div className="flex flex-col items-end gap-1">
      {images && <Images images={images} />}
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

// 暫定的にここに書いている
const Images: FC<{ images: (string | ArrayBuffer | null | undefined)[] }> = ({
  images,
}) => {
  return (
    <div className="grid grid-cols-2 gap-1">
      {images.map((image, index) => {
        return (
          <Image
            src={image as string}
            alt="画像"
            width={0}
            height={0}
            key={index}
            className="h-20 w-20 object-cover"
          />
        );
      })}
    </div>
  );
};
