import React, { useEffect } from 'react';
import {
  useLocation,
  Switch,
  Route,
} from 'react-router-dom';

import ReactGA from 'react-ga';
import { Search } from './pages/Search';
import { BorrowerProfile } from './pages/BorrowerProfile';
import { EmailVerification, Login, Signup } from './pages/Auth';
import { Landing } from './pages/Landing';

const usePageViews = () => {
  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize(String(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE));
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[location]);
}

export const App = () => {
  usePageViews();
  return (
    <Switch>
      <Route component={Landing} exact path="/" />
      <Route component={EmailVerification} exact path="/verify" />
      <Route component={Login} exact path="/login" />
      <Route component={Signup} exact path="/signup" />
      <Route component={BorrowerProfile} exact path="/borrower" />
      <Route component={Search} exact path="/search" />
    </Switch>
  );
}
