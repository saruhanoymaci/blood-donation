import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Search from "./component/Search"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Donation from "./component/Donation";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cust-contain">
          <Router>
            <Switch>
             <Route path="/"> <Donation/> </Route>
             <Route path="/search"> <Search /> </Route>
            </Switch>
          </Router>
        </div>
      </div>
     
    </div>
  );
}

export default App;
