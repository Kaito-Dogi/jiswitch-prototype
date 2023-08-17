import { ChangeEvent, FC, SetStateAction } from "react";

type Props = {
  message: string;
  setMessage: (value: SetStateAction<string>) => void;
};

/**
 * @package
 */
export const TextField: FC<Props> = ({ message, setMessage }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <input
      name="message"
      type="text"
      value={message}
      placeholder="メッセージを入力…"
      onChange={onChange}
      className="grow rounded-sm p-2"
    />
  );
};
