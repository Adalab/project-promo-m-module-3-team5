import "../stylesheets/App.scss";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Home from "./Home.js";

function App() {
  return (
    <>
      <div className="cards-page">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/card">
            <Header />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </div>
      ;
    </>
  );
}

export default App;
