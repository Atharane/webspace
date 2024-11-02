"use client";

import { useTheme } from "next-themes";
import "@/styles/toggle.css";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-2 left-4 z-50">
      <label className="switch">
        <input defaultChecked={theme === "dark"} type="checkbox" />
        <span
          onKeyDown={() => setTheme(theme === "dark" ? "light" : "dark")}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="slider"
        />
      </label>
    </div>
  );
}
