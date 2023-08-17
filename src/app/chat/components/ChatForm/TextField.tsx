import { ChangeEvent, FC, SetStateAction } from "react";

type Props = {
  message: string;
  setMessage: (value: SetStateAction<string>) => void;
};

/**
 * @package
 */
export const TextField: FC<Props> = ({ message, setMessage }) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <textarea
      name="message"
      value={message}
      placeholder="メッセージを入力…"
      onChange={onChange}
      rows={1}
      className="grow rounded-sm bg-lightGray p-2"
    />
  );
};
