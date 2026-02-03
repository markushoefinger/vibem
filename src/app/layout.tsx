import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeM — Micro-SaaS Studio",
  description: "Building the future, one friction at a time. AI-powered tools that solve everyday problems.",
  keywords: ["micro-saas", "ai", "startup", "vienna", "productivity", "tools"],
  authors: [{ name: "VibeM" }],
  openGraph: {
    title: "VibeM — Micro-SaaS Studio",
    description: "Building the future, one friction at a time.",
    url: "https://vibem.net",
    siteName: "VibeM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeM — Micro-SaaS Studio",
    description: "Building the future, one friction at a time.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
