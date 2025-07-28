import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Providers } from "@/base/providers";
import { cn } from "@/base/utils";

import "@/base/styles/index.css";

const pretendard = localFont({
  src: "../public/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "톡터뷰 - AI 모의면접 플랫폼",
  description: "AI와 함께하는 스마트한 면접 준비",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",
          pretendard.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
