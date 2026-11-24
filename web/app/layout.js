import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "./components/Header";
import AppShell from "./components/AppShell";
import { InvestigationProvider } from "../context/investigationContext";
import { Suspense } from "react";
import { Caveat, Reenie_Beanie } from 'next/font/google';
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
});

const reenieBeanie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-reenie-beanie',
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Murder Mystery Investigation",
  description: "CPAN212 Group 8 Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${reenieBeanie.variable}`}>
      <body>

        <InvestigationProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <AppShell>{children}</AppShell>
          </Suspense>
        </InvestigationProvider>

      </body>
    </html>
  );
}
