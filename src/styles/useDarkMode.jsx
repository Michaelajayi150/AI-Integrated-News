import { useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return [theme, toggleTheme];
}
