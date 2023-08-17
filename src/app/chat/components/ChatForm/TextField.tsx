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
    <textarea rows={1} className="h-fit grow rounded-sm bg-lightGray p-2">
      <input
        name="message"
        type="text"
        value={message}
        placeholder="メッセージを入力…"
        onChange={onChange}
      />
    </textarea>
  );
};
