"use client";

import { usePathname, useRouter } from "next/navigation";
import { AppTheme } from "./Theme";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/Logo.png";

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
      <div>
        {/*{pathname === "/news-discoveries" && (
          <>
            <button type="button" onClick={() => router.back()}>
              <ChevronLeft />
            </button>
          </>
        )}
        {pathname === "/contact-us" ||
        pathname === "/about-us" ||
        pathname === "/disclaimer" ||
        pathname === "/editorial-policy" ||
        pathname === "/copyright-policy" ||
        pathname === "/privacy-policy" ||
        pathname === "/terms-service" ? (
          <>
            <button type="button" onClick={() => router.back()}>
              <ChevronLeft />
            </button>
          </>
        ) : null}
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
        )} */}

        <Image alt="" src={Logo} height={100} width={180} onClick={goHome} />
      </div>
      <AppTheme />
    </header>
  );
}
