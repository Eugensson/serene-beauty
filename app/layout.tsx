import type { Metadata } from "next";
import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Transition } from "@/components/transition";
import { CursorProvider } from "@/components/cursor-context";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Serene Beauty",
    template: "%s | Serene Beauty",
  },
  description:
    "Serene Beauty offers high-quality skincare, cosmetics, and wellness products to enhance your natural beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${marcellus.variable} ${montserrat.variable} antialiased overflow-x-hidden`}
      >
        <CursorProvider>
          <Transition />
          <Header />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
