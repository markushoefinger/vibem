import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpacerGIF — Micro-SaaS Studio",
  description: "Removing friction, one tool at a time. AI-powered tools that solve everyday problems.",
  keywords: ["micro-saas", "ai", "startup", "vienna", "productivity", "tools"],
  authors: [{ name: "SpacerGIF" }],
  openGraph: {
    title: "SpacerGIF — Micro-SaaS Studio",
    description: "Removing friction, one tool at a time.",
    url: "https://spacer-gif.com",
    siteName: "SpacerGIF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpacerGIF — Micro-SaaS Studio",
    description: "Removing friction, one tool at a time.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="57e56e05-d4fd-4f9f-a1fd-1cc83ec7f6a6"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
