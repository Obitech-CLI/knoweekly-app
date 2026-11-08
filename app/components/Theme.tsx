"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function AppTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          }
          if (theme === "light") {
            setTheme("dark");
          }
        }}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </button>
    </>
  );
}

export { AppTheme };
