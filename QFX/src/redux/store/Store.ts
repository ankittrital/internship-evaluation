import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../reducer/rootReducer';
import rootSaga from '../saga/RootSaga';

const sagaMiddleware = createSagaMiddleware();
const globalStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default globalStore;
