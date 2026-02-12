import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rexi — Regex was a mistake, just like your ex",
  description: "Write regex without tears or confusion. A human-readable regex builder for JavaScript.",
  keywords: ["regex", "javascript", "typescript", "developer tools", "pattern matching"],
  authors: [{ name: "rexi" }],
  openGraph: {
    title: "rexi — Regex was a mistake, just like your ex",
    description: "Write regex without tears or confusion.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rexi — Regex was a mistake, just like your ex",
    description: "Write regex without tears or confusion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}