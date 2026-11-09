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
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </button>
    </>
  );
}

export { AppTheme };
