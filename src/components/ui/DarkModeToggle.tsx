"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log("Theme values updated:");
      console.log("Current theme:", theme);
      console.log("Resolved theme:", resolvedTheme);
      console.log("HTML classes:", document.documentElement.className);
    }
  }, [theme, resolvedTheme, mounted]);

  const handleToggle = () => {
    console.log("Toggle clicked!");
    console.log("useTheme hook available:", typeof setTheme === 'function');
    
    if (typeof setTheme === 'function') {
      const newTheme = theme === "dark" ? "light" : "dark";
      console.log("Setting theme to:", newTheme);
      setTheme(newTheme);
    } else {
      console.error("setTheme is not available - ThemeProvider might not be properly configured");
    }
  };

  if (!mounted) {
    return (
      <div className="p-2 rounded-full border border-gray-300 w-9 h-9 bg-gray-100">
        {/* Placeholder to prevent layout shift */}
      </div>
    );
  }

  // Show error state if theme is still undefined after mounting
  if (theme === undefined && resolvedTheme === undefined) {
    return (
      <button
        onClick={handleToggle}
        className="p-2 rounded-full border border-red-300 bg-red-100 text-red-600"
        title="Theme provider not working"
      >
        <Moon className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {(theme === "dark" || resolvedTheme === "dark") ? (
        <Sun className="w-5 h-5 text-gray-900 dark:text-gray-100" />
      ) : (
        <Moon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
      )}
    </button>
  );
}