export type Message = {
  content: string;
  sender: "jiswitch" | "user";
  images: (string | ArrayBuffer)[];
};
