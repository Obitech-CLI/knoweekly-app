"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function AppTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
            return;
          }
          if (theme === "light") {
            setTheme("dark");
            return;
          }
        }}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </button>
    </>
  );
}

export { AppTheme };
