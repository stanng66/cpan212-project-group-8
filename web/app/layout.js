import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "./components/Header";
import AppShell from "./components/AppShell";
import { InvestigationProvider } from "../context/investigationContext";
import { Suspense } from "react";

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
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
