import { createStore, applyMiddleware, compose } from 'redux'
import storage from 'redux-persist/es/storage'
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { persistStore, persistCombineReducers, persistReducer  } from 'redux-persist'
import ReduxPromise from 'redux-promise';

const reducer = persistCombineReducers({ key: 'root', storage, whitelist:['isAuthenticated']}, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, {}, composeEnhancers(applyMiddleware(ReduxPromise)))
let persistor = persistStore(store)

export { store, persistor }