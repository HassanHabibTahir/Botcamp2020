import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar";
import LaunchIndex from "./components/LaunchIndex";
import LaunchShoe from "./components/LaunchShoe";
import NotFound from "./components/NotFound";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#810B31",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#810B31",
      secondary: "#FFFFFF",
    },
    background: {
      default: "#222222",
    }
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Launch />}>
              <Route path="/" element={<LaunchIndex />} />
              <Route path=":slug" element={<LaunchShoe />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h1>products!</h1>
      <Outlet />
    </div>
  );
}


export default App;
