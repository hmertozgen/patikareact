import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                // activeStyle={{ backgroundColor: "black", color: "#fff" }}
                activeClassName="active"
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                // activeStyle={{ backgroundColor: "black", color: "#fff" }}
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                // activeStyle={{ backgroundColor: "black", color: "#fff" }}
                activeClassName="active"
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/users" component={Users}>
            <Users />
          </Route>
          {/* <Route path="/user/:id" component={User}>
            <User />
          </Route> */}

          <Route path="*" component={Error404}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
