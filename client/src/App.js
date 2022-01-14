import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;
