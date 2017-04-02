import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homePageReducer from './home-page';
import actionPageReducer from './action-page';

const rootReducer = combineReducers({
    homePage: homePageReducer,
    actionPage: actionPageReducer,
    routing: routerReducer
});

export default rootReducer;