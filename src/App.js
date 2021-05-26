import React from 'react'
import Searchpage from "./Searchpage";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
           <Searchpage />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
