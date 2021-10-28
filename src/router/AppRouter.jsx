import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Login } from "../pages/LoginRegister";
import { Register } from "../pages/LoginRegister";
import Dashboard from "../pages/Dashboard";
import UpdateBlog from "../pages/UpdateBlog";
import Detail from "../pages/Detail";

import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Dashboard} />

        <PrivateRouter path="/profile" component={Profile} />
        <PrivateRouter path="/new-blog" component={NewBlog} />
        <PrivateRouter path="/update-blog/:id" component={UpdateBlog} />
        <PrivateRouter path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
