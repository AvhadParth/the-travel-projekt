import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Caveat, Pacifico } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "700"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-kiddy",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "The Travel Projekt | Stories, Not Transactions",
  description:
    "An authentic travel discovery platform and boutique itinerary planner offering curated journeys, local experiences, and magazine-style travel stories.",
  keywords: [
    "Travel Projekt",
    "Bespoke Itinerary Builder",
    "Kashmir Trips",
    "Boutique Travel Agency",
    "Custom Travel Planning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${caveat.variable} ${pacifico.variable}`}
    >
      <body className="antialiased bg-[#FFF8ED] text-[#2C2640] selection:bg-[#FCB040] selection:text-[#2C2640]">
        {children}
      </body>
    </html>
  );
}
