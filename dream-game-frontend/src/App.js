import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/searchPage";
import GameDetailPage from "./components/GameDetailPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/game/:gameId" component={GameDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;

