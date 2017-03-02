import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homePageReducer from './home-page';

const rootReducer = combineReducers({
    homePage: homePageReducer,
    routing: routerReducer
});

export default rootReducer;