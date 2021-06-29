import React from "react"
import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./ui/Theme";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";

function App() {

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [value, setValue] = React.useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path="/services">
            <Redirect path="/" />
            {/* Servicess */}
          </Route>
          <Route exact path="/mobileapps">
            <Redirect path="/" />
            {/* MobileApps */}
          </Route>
          <Route exact path="/customeSoftware">
            <Redirect path="/" />
            {/* custome Software Developmet */}
          </Route>
          <Route exact path="/websites">
            <Redirect path="/" />
            {/* Web Sites Development */}
          </Route>
          <Route exact path="/revolution">
            <Redirect path="/" />
            {/* Revolution */}
          </Route>
          <Route exact path="/about">
            <Redirect path="/" />
            {/* About */}
          </Route>
          <Route exact path="/contact">
            <Redirect path="/" />
            {/* Contact */}
          </Route>
          <Route exact path="/extimate">
            <Redirect path="/" />
            {/* Estimate */}
          </Route>
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
