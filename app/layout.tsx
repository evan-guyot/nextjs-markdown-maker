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
      <body className="font-sans bg-white dark:bg-black">
        <div className="min-h-full">
          <Header />
          <main className="h-svh">
            {" "}
            <div className="relative h-full isolate overflow-hidden bg-gray-100 dark:bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 ">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
