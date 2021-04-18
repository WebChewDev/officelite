import { Route } from "react-router-dom";
import "./App.css";
//pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
