import React from "react";
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import home from "./pages/home";
import clothes from "./pages/clothes";
import signin from './pages/signIn'
import Navbar from "./components/Navbar";
import "./styles/App.css";

// Material Default theme and personalization
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import customTheme from "./utils/theme";
 
const theme = createMuiTheme(customTheme);
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/ropa" component={clothes} />
            <Route exact path= "/signin" component={signin} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
