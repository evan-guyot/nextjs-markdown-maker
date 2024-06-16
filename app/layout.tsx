import { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/ui/header";

export const metadata: Metadata = {
  title: {
    template: "%s | Markdown Maker",
    default: "Markdown Maker",
  },
  description: "A modern and fast Markdown file maker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-full">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
