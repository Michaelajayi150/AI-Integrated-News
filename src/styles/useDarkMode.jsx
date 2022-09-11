import { useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (mode) => {
    mode === "dark" ? setTheme("light") : setTheme("dark");
  };

  return [theme, toggleTheme];
}
