import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './store/configureStore';

import 'STYLES/bootstrap-3.3.7/css/bootstrap.min.css';
import 'STYLES/styles.css';
import 'STYLES/steps.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>, document.getElementById('app')
);
