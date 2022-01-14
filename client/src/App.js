import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles } from "./theme";

import Landing from "./components/views/Landing";
import Login from "./components/views/Login";
import Nearby from "./components/views/Nearby";
import Profile from "./components/views/Profile";
import Search from "./components/views/Search";
import Signup from "./components/views/Signup";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Nearby" element={<Nearby />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
