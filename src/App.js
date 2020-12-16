import MainContent from "./views/MainContent";
import "./css/App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Country from "./views/Country";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainContent}/>
        <Route path="/country/:id" exact component={Country}/>
      </Switch>
    </Router>
  );
}

export default App;
