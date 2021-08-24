import React, { FC } from "react";
import "./App.css";
import "./Theme.css"
import Films from "./pages/Films/Films";
import About from "./pages/About/About";
import Nav from "./components/Nav/Nav";
import { Route } from "react-router-dom";
import { PATH_ABOUT, PATH_FILMS } from "./utils/constants";

const App:FC = () => {
  return (
    <div className="App">
      <Nav />
      <Route path={PATH_FILMS}>
        <Films />
      </Route>
      <Route path={PATH_ABOUT}>
        <About />
      </Route>
      <Route path="/"></Route>
    </div>
  );
};

export default App;
