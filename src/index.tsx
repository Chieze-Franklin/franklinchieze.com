import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { App } from './App';
import { FederalEmployeeProvider } from './connect';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: process.env.REACT_APP_ENDPOINT_URL,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client} >
    <FederalEmployeeProvider>
      <Router>
        <App />
      </Router>
    </FederalEmployeeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
