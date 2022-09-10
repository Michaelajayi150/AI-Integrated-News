import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.color};
  }

  .hero-section {
    background: ${({ theme }) => theme.gradient};
    transition: all .5s linear;
  }
`;

export const lightTheme = {
  bg: "#fff",
  color: "#121212",
  gradient:
    "linear-gradient(276.95deg,#9fe0f4 3.47%,#9797d1 23.84%,#9697d1 87.95%,#58acd8 100%)",
};

export const darkTheme = {
  bg: "#121212",
  color: "#fff",
  gradient:
    "linear-gradient(276.95deg, #003D51 3.47%, #1B1D79 23.84%, #1B1D79 87.95%, #003D51 100%);",
};
