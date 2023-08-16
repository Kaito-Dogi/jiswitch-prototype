import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  description: "jiswitch prototype",
  title: "jiswitch prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
