import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';

import searchResult from './reducer/modules/searchResult';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore);

const reducer = combineReducers({
    searchResult
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
