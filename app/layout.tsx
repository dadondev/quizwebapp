import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Protect from "@/components/Protect";
import Providers from "@/components/Providers";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Test ishlayman",
  description: "Test ishlayman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={font.className + " h-full bg-bg"}>
        <Providers>
          <Protect>{children}</Protect>
        </Providers>
      </body>
    </html>
  );
}
