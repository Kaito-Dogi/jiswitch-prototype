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
      <body className="flex justify-center">
        <div className="w-full sm:max-w-screen-sm">{children}</div>
      </body>
    </html>
  );
}
