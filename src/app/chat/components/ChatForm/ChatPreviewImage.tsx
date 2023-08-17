import { FC } from "react";

import { Message } from "../../models/Message";
import { ChatImage } from "../ChatImage";

type Props = {
  images: Message["images"];
};

/**
 * @package
 */
export const ChatPreviewImage: FC<Props> = ({ images }) => {
  return (
    <div className="flex gap-2 overflow-x-scroll">
      {images.map((image, index) => {
        return <ChatImage src={image} key={index} />;
      })}
    </div>
  );
};
