import { Route } from "react-router";
import { Link } from "react-router-dom";
import About from "./components/About/A";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
        <NavLink activeClassName="active" to="/" exact>Home</NavLink>
        </li>  
        <li>
        <NavLink activeClassName="active" to="/about" exact>About</NavLink>
        </li> 
        <li>
        <NavLink activeClassName="active" to="/contacts" exact>Contacts</NavLink>
        </li> 
      </ul>     

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts}  />
        <Route path="/" render={() => <h1>Page not found</h1>} />
        {/* <Redirect to="/" /> */}
      </Switch>  
    </div>
  );
}

export default App;
