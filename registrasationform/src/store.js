import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import ApiReducers from './reducers/ApiReducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); 

const store = createStore(
    ApiReducers,
    compose(applyMiddleware(thunk), composeEnhancers)
)
export default store;