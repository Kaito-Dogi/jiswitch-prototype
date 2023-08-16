import { FC } from "react";

type Props = {
  children: string;
  fromUser: boolean;
};

/**
 * @package
 */
export const ChatMessage: FC<Props> = ({ children, fromUser }) => {
  return fromUser ? (
    <div className="flex justify-end">
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
