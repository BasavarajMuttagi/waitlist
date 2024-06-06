import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import CollapseContextProvider from "./contexts/CollapseContextProvider";

export const metadata: Metadata = {
  title: "Waitlist",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CollapseContextProvider>
        <body className={GeistSans.className}>{children}</body>
      </CollapseContextProvider>
    </html>
  );
}
