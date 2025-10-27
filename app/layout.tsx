import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RuyaaCapital — AI Agents & Business Services",
  description:
    "AI agents, CRM, dashboards, website building, and integrations for modern operations.",
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23000000'/%3E%3Ctext x='50%25' y='52%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-size='32' fill='%23FFFFFF'%3ERC%3C/text%3E%3C/svg%3E",
      },
    ],
  },
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
