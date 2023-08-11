import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "jiswitch prototype",
  description: "jiswitch prototype",
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
