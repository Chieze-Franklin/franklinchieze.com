import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import About from "views/About/About.js";
import Project from "views/Project/Project.js";
import Projects from "views/Projects/Projects.js";

import Components from "views/Components/Components.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={About} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/projects/:id" exact component={Project} />

      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/go" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
