/**
 * @see https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application
 */
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as form } from 'redux-form';

import {createReducer as createActReducer} from 'redux-act';
import {
  StartLoadingModule,
  ErrorLoadingModule,
  SuccessLoadingModule,
} from './actions';

// Reducer for loading modules
const LoadedModules = createActReducer({
  [StartLoadingModule]: (state, moduleName) => ({...state, [moduleName]: false}),
  [ErrorLoadingModule]: (state, moduleName) => ({...state, [moduleName]: 'error'}),
  [SuccessLoadingModule]: (state, moduleName) => ({...state, [moduleName]: true}),
}, {
  /**
   * Here will be object where key is moduleName and value is:
   * - true - module loaded ok
   * - false - module is loading
   * - undefined - module was not loaded and load can be initiated
   * - 'error' - module tried to load but failed, can try to load again
   */
});

export {
  LoadedModules
};

// import {ApiTableReducer} from './ApiTable/reducers';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    // apiTable: ApiTableReducer,
    LoadedModules,
    form,
    ...asyncReducers
  }, {});
}