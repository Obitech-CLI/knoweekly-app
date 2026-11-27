"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ObitechLogo from "@/public/Obitech Logo.png";

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <div className="footer">
      {!pathname.startsWith("/admin") && (
        <>
          <nav>
            <Link href="/about-us">about</Link>
            <Link href="/contact-us">contact</Link>
            <Link href="/disclaimer">disclaimer</Link>
            <Link href="/privacy-policy">privacy policy</Link>
            <Link href="/terms-service">terms of service</Link>
            <Link href="/copyright-policy">copyright policy</Link>
            <Link href="/editorial-policy">editorial policy</Link>
          </nav>
          <div className="sponsor">
            <span>
              powered by
              <br />
              <em>obitech</em>
            </span>

            <Image alt="" src={ObitechLogo} width={100} height={100} />
          </div>
        </>
      )}
      <footer>
        <p>&copy; knoweekly website {year}.</p>
      </footer>
    </div>
  );
}
