import Home from "./pages/Home/home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./navigation/navigation";
import Project from "./pages/Project/project";
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Project" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
