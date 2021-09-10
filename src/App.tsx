import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { Resume } from './pages/Resume';
import { Landing } from './pages/Landing';

export const App = () => {
  return (
    <Switch>
      <Route component={Landing} exact path="/" />
      <Route component={Resume} exact path="/resume" />
    </Switch>
  );
}
