import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '../routes/history';
import rootReducers from './ducks';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(rootReducers(history), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSagas);

export default store;
