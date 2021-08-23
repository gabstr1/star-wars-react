import "./App.css";
import Films from "./pages/Films";
import About from "./pages/About";
import Nav from "./Nav";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Nav />

      <Route path="/films">
        <Films />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
};

export default App;
