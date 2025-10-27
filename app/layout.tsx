import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RuyaaCapital — Applied AI Systems",
  description: "AI agents deployed inside your business operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white antialiased">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
