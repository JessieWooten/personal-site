import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import SupportPage from "./pages/Support";
import BandDirectorPrivacy from "./pages/privacy/BandDirector";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/support" component={SupportPage} />
          <Route path="/privacy/banddirector" component={BandDirectorPrivacy} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
