import { FC } from "react";

type Props = {
  children: string;
  fromUser?: boolean;
};

/**
 * @package
 */
export const Message: FC<Props> = ({ children, fromUser = true }) => {
  return fromUser ? (
    <div className="grid place-items-end">
      <p className="max-w-[70%] rounded-l-lg rounded-tr-lg bg-primary p-2">
        {children}
      </p>
    </div>
  ) : (
    <div className="grid place-content-start">
      <p className="max-w-[70%] rounded-r-lg rounded-tl-lg bg-white p-2">
        {children}
      </p>
    </div>
  );
};
