"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {!isHomePage && <Header />}

      <main
        className={
          isHomePage
            ? "page-container home-container"
            : "page-container"
        }
      >
        {children}
      </main>
    </>
  );
}