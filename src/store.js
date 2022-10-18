import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'theme',
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
