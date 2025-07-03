import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
<<<<<<< HEAD
import { Providers } from "@/base/providers";
=======
import { Providers } from "@/shared/providers";
>>>>>>> e887cc2 (feat: 대시보드 페이지 작업 및 프로젝트 구조 변경 (#2))

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
      <body className={pretendard.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
