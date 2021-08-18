import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cust-contain">
<Router>
  <Switch>
    <Route path="/"></Route>
  </Switch>
</Router>
        </div>
      </div>
     
    </div>
  );
}

export default App;
