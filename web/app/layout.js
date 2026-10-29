import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "./components/Header";
import AppShell from "./components/AppShell";

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
        {/* <Header /> */}

        <AppShell>{children}</AppShell>

        {/* <main className="page-container">
          {children}
        </main> */}
      </body>
    </html>
  );
}
