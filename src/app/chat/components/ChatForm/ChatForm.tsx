import { ChangeEvent, FC } from "react";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSendButtonClick: () => void;
};

/**
 * @package
 */
export const ChatForm: FC<Props> = ({ onChange, onSendButtonClick, value }) => {
  return (
    <form className="flex w-full max-w-screen-sm gap-4">
      <input
        id="message"
        name="message"
        value={value}
        onChange={onChange}
        type="text"
        placeholder="メッセージを入力…"
        className="flex-1 rounded-sm p-2"
      />
      <button
        type="button"
        onClick={onSendButtonClick}
        className="rounded-sm bg-secondary p-2 px-4 text-white"
      >
        送信
      </button>
    </form>
  );
};
