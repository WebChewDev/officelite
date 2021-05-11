import { Route } from "react-router-dom";
//pages
import Home from "./views/pages/Home/index";
import SignUp from "./views/pages/SignUp/index";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}
export default App;
