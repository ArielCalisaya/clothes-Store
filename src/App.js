import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import clothes from "./pages/clothes";
import "./App.css";

// Material Default theme and personalization
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import customTheme from "./utils/theme";

const theme = createMuiTheme(customTheme)
function App() {
  

  return (
    <MuiThemeProvider theme={theme}>

    <Router>
      <Switch>
        <div className="App">
          <h1>Confecciones Rimba</h1>
          <Route exact path="/" component={home} />
          <Route path="/ropa" component={clothes} />
        </div>
      </Switch>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
