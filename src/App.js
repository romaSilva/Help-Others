import React from "react";
import Header from "./components/Header";
import Splash from "./components/Splash";
import SearchPage from "./components/SearchPage";
import Project from "./components/Project";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalState from "./contexts/GlobalState";
import "./App.css";

function App() {
  return (
    <Router>
      <GlobalState>
        <div className="app">
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/project/:id" component={Project} />
            </Switch>
          </div>
        </div>
      </GlobalState>
    </Router>
  );
}

export default App;
