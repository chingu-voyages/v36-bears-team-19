import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}
`;

export const darkTheme = {
  body: "#011126",
  text: "white",
  buttonGradient:
    "radial-gradient(77.98% 5211.56% at 37% 100%, #FE930A 0%, #FF6139 77.12%)",
};
