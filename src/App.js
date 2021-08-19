import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Search from "./component/Search"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Donation from "./component/Donation";
import Header from "./component/Header"
import Signup from "./component/Signup"
import Login from "./component/Login"
import Home from "./component/Home"
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cust-contain">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact> <Home /> </Route>
              <Route path="/donation" > <Donation /> </Route>
              <Route path="/search"> <Search /> </Route>
              <Route path="/signup"><Signup /></Route>
              <Route path="/login"><Login /></Route>
            </Switch>
          </Router>
        </div>
      </div>

    </div>
  );
}

export default App;
