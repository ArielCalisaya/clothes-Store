import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './pages/home'
import clothes from './pages/clothes'
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
        <h1>Confecciones Rimba</h1>
        <Route exact path="/" component={home}/>
        <Route path="/ropa" component={clothes}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
