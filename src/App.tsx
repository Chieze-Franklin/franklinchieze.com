import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { Resume, ResumePdf } from './pages/Resume';
import { Landing } from './pages/Landing';

export const App = () => {
  return (
    <Switch>
      <Route component={Landing} exact path="/" />
      <Route component={Resume} exact path="/resume" />
      <Route component={ResumePdf} exact path="/resume/pdf" />
    </Switch>
  );
}
