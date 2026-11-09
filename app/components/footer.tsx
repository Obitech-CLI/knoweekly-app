"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <nav>
        <Link href="/about-us">about</Link>
        <Link href="/contact-us">contact</Link>
        <Link href="/disclaimer">disclaimer</Link>
        <Link href="/privacy-policy">privacy policy</Link>
        <Link href="/terms-service">terms of service</Link>
        <Link href="/copyright-policy">copyright policy</Link>
        <Link href="/editorial-policy">editorial policy</Link>
      </nav>
      <footer>
        <p>&copy; knoweekly website {year}.</p>
      </footer>
    </div>
  );
}
