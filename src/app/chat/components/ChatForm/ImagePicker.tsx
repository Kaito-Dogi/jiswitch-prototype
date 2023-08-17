import { ChangeEvent, FC, SetStateAction } from "react";

import { Message } from "../../models/Message";

type Props = {
  setImages: (value: SetStateAction<Message["images"]>) => void;
};

/**
 * @package
 */
export const ImagePicker: FC<Props> = ({ setImages }) => {
  const onChange = (ce: ChangeEvent<HTMLInputElement>) => {
    // 1枚も画像が選択されなかったら処理を中断
    const length = ce.target.files?.length || 0;
    if (length === 0) return;

    // 元々選択していた画像を削除
    setImages([]);

    // 選択された画像の枚数分処理を実行
    [...Array(length)].map((_, index) => {
      const reader = new FileReader();

      // 画像読み込み後に画像を保持
      reader.onload = (pe: ProgressEvent<FileReader>) => {
        const result = pe.target?.result;
        result && setImages((prev) => [...prev, result]);
      };

      // 画像を読み込み
      const file = ce.target.files?.[index];
      if (!file) return;
      if (!file.type.match("image.*")) return;
      reader.readAsDataURL(file);
    });
  };

  return (
    <label className="py-2">
      <p>📷</p>
      <input
        name="image"
        type="file"
        accept="image/*"
        onChange={onChange}
        multiple
        className="hidden"
      />
    </label>
  );
};
