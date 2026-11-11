"use client";

import { usePathname, useRouter } from "next/navigation";
import { AppTheme } from "./Theme";
import { ChevronLeft } from "lucide-react";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const goHome = () => {
    if (pathname.startsWith("/admin")) {
      router.replace("/admin/dashboard");
    } else {
      router.replace("/");
    }
  };

  return (
    <header>
      {pathname === "/blogs" && (
        <>
          <button type="button" onClick={() => router.back()}>
            <ChevronLeft />
          </button>
        </>
      )}
      {pathname === "/admin/create-blogs" && (
        <>
          <button type="button" onClick={() => router.back()}>
            <ChevronLeft />
          </button>
        </>
      )}
      {pathname === "/admin/manage-blogs" && (
        <>
          <button type="button" onClick={() => router.back()}>
            <ChevronLeft />
          </button>
        </>
      )}
      <span onClick={goHome}>knoweekly</span>
      <AppTheme />
    </header>
  );
}
