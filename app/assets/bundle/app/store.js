import { createStore, applyMiddleware } from 'redux';
import createReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from './history';

const ReactRouterMiddleware = routerMiddleware(history);
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export default function configureStore(initialState = {}) {


  const store = createStore(
    connectRouter(history)(createReducer()),
    initialState,
    composeEnhancers(
      applyMiddleware(ReactRouterMiddleware),
      applyMiddleware(ReduxThunk),
      // applyMiddleware(logger),
    )
  );
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  // console.log('injecting async reducer', store, name, asyncReducer);
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}