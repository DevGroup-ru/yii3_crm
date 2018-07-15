import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from './history';
import DevTools from './DevTools';


const ReactRouterMiddleware = routerMiddleware(history);
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const loggerMiddleware = store => next => action => {
  console.group(action.type);  // eslint-disable-line no-console
  console.info('dispatching', action);  // eslint-disable-line no-console
  const result = next(action);
  // OMIT toJS if you're not using immutable
  console.log('next state', store.getState()); // eslint-disable-line no-console
  console.groupEnd(action.type); // eslint-disable-line no-console
  return result;
};

const monitorReducer = (state = {}, action) => state;

export default function configureStore(initialState = {}) {
  const store = createStore(
    connectRouter(history)(createReducer()),
    initialState,
    compose(
      applyMiddleware(ReactRouterMiddleware),
      applyMiddleware(ReduxThunk),
      applyMiddleware(loggerMiddleware),
      DevTools.instrument(),
      // instrument(monitorReducer, { maxAge: 50 })
    )
  );
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {

  store.asyncReducers[name] = asyncReducer;
  const reducers = connectRouter(history)(createReducer(store.asyncReducers));
  store.replaceReducer(reducers);

}