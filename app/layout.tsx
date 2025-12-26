import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "เลือกตั้ง",
  description: "อำนาจของท่านอยู่ที่การเลือกตั้งครั้งนี้",
};

const ibmPlexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={ibmPlexThai.variable}>
      <body>{children}</body>
    </html>
  );
}
