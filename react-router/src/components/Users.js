import React from "react";
import { NavLink, Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

function Users() {
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);

  const { path, url } = useRouteMatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);
  console.log(users);
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink activeClassName="active" to={`${url}/${user.id}`}>
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}>
          {/* <Topics /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default Users;
