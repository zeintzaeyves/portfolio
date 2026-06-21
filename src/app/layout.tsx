import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

export const metadata: Metadata = {
  title: "Zein Khalid — Portfolio",
  description:
    "Frontend Developer and UI/UX Web Designer based in the Philippines.",
  icons: {
    icon: "/images/profile.png",
    shortcut: "/images/profile.png",
    apple: "/images/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
