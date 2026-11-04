"use client";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; knoweekly website {year}. all right reserved</p>
    </footer>
  );
}
