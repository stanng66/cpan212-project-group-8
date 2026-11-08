"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isPublicPage = pathname === "/" || pathname === "/login" || pathname === "/register";

  return (
    <>
      {!isPublicPage && <Header />}

      <main
        className={
          isPublicPage
            ? "page-container home-container"
            : "page-container"
        }
      >
        {children}
      </main>
    </>
  );
}