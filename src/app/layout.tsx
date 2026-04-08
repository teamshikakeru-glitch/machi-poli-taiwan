import type { Metadata, Viewport } from "next";
import { DotGothic16, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dot-gothic",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-press-start",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "城市政見 | AI帶你看，你的城市政治",
  description:
    "輸入地址，即可一目瞭然你所在地區的政治資訊。AI自動蒐集公開資訊，完全中立的地區政治可視化服務。",
  openGraph: {
    title: "城市政見 | AI帶你看，你的城市政治",
    description:
      "只要輸入地址，就能看到縣市長、立法委員、議會組成、選舉時程。AI運營的完全中立服務。",
    type: "website",
    images: [
      {
        url: "https://machi-poli-taiwan.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "城市政見 | AI帶你看，你的城市政治",
    description:
      "只要輸入地址，就能看到縣市長、立法委員、議會組成、選舉時程。你的城市呢？",
    images: [
      "https://machi-poli-taiwan.vercel.app/og.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${dotGothic16.variable} ${pressStart2P.variable}`}
    >
      <body className="min-h-screen bg-[#008080] text-black font-[family-name:var(--font-dot-gothic)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
