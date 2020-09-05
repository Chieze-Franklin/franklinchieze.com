import React /*, { lazy }*/ from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import SuspenseComponent from "components/SuspenseComponent/SuspenseComponent.js";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// const About = lazy(() => import("views/About/About.js"));
import About from "views/About/About.js";
import Project from "views/Project/Project.js";
import Projects from "views/Projects/Projects.js";
import Tool from "views/Tool/Tool.js";
import Tools from "views/Tools/Tools.js";

import Components from "views/Components/Components.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={SuspenseComponent(About)} />
      <Route path="/projects" exact component={SuspenseComponent(Projects)} />
      <Route
        path="/projects/:id"
        exact
        component={SuspenseComponent(Project)}
      />
      <Route path="/tools" exact component={SuspenseComponent(Tools)} />
      <Route path="/tools/:id" exact component={SuspenseComponent(Tool)} />

      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/go" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
