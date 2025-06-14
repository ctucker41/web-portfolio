import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Christian Tucker Portfolio",
  description: "Modern Next.js & TailwindCSS Development Portfolio",
  icons: {
      icon: [
          { url: "/favicon.svg", type: "image/svg+xml" },
          { url: "/favicon.png", type: "image/png" },
      ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
