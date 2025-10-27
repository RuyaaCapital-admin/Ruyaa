import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RuyaaCapital — AI Agents & Business Services",
  description:
    "AI agents, CRM, dashboards, website building, and integrations for modern operations.",
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
