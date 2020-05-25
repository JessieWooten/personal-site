import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import SupportPage from "./pages/Support";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/support">
            <SupportPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
