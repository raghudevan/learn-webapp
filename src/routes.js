import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'CORECOMPS/App';
import HomePage from 'CORECOMPS/HomePage';
import NotFoundPage from 'CORECOMPS/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);