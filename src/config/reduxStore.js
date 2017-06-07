import { createStore, applyMiddleware,combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import base from 'redux/modules/base';

const middlewares = [promiseMiddleware()];
const createStoreWithMiddleware = 
    applyMiddleware(...middlewares)(createStore);

const reducer = combineReducers({
    base
});

const reduxStore = (initialState) =>
    createStoreWithMiddleware(reducer, initialState, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__());

export default reduxStore;