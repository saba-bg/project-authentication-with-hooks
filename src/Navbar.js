import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import routes from "./routes";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import "./Navbar.css";

function Navbar() {
  return (
    <div className='Navbar'>
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>
      <AuthProvider>
        <Switch>
          {routes.map((route, item) =>
            route.private ? (
              <PrivateRoute key={item} {...route} />
            ) : (
              <Route key={item} {...route} />
            )
          )}
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default Navbar;
