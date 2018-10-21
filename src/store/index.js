import {
    createStore,
    combineReducers,
    applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import logger from "redux-logger";

import { contactListReducer } from './reducers/index';

import { readFromLocalStorage, writeToLocalStorage } from '../helpers/localStorage'

const saver = store => next => action => {
    let result = next(action);
    writeToLocalStorage(store.getState());
    return result;
};

const storeFactory = () =>
    applyMiddleware(logger, saver, thunk)(createStore)(combineReducers({contactListReducer}),
        readFromLocalStorage()
    );

export default storeFactory;
