import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Hero from "./components/hero";
import ToggleButton from "./components/Button";
import "./styles/app.css";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import Main from "./components/main/main";
import Footer from "./components/footer";
import { useDarkMode } from "./styles/useDarkMode";

const alanKey =
  "52e23bfc63eb8d383a4d3a42d5e6ed7d2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  const [newsArticles, setNewsArticles] = useState([]);
  const [highlight, setHighlight] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, number, themeColor, articles }) => {
        if (command === "newsHeadline") {
          setNewsArticles(articles);
          setHighlight(-1);
        } else if (command === "switchMode") {
          themeColor === "light" ? toggleTheme("dark") : toggleTheme("light");
          console.log(theme, themeColor);
        } else if (command === "highlight") {
          setHighlight((prevHighlight) => prevHighlight + 1);
        } else if (command === "read") {
          const highlightNumber = number - 1;
          setHighlight(highlightNumber);
        } else if (command === "open") {
          const article = articles[number - 1];
          window.open(article.url, "_blank");
        }
      },
    });
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ToggleButton mode={theme} toggleMode={toggleTheme} />
      <Hero />
      <Main mode={theme} articles={newsArticles} active={highlight} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
