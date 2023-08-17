import Image from "next/image";
import { FC } from "react";

import { Message } from "../../models/Message";

type Props = {
  src: Message["images"][number];
};

/**
 * @package
 */
export const ChatImage: FC<Props> = ({ src }) => {
  return (
    <Image
      src={src as string}
      alt="画像"
      width={0}
      height={0}
      className="h-20 w-20 rounded-sm object-cover"
    />
  );
};
