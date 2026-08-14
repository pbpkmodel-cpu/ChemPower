import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "事業單位化學品管理系統",
  description: "塑膠製品業及橡膠製品業適用的職場化學物質風險評估與管理實務架構。",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
