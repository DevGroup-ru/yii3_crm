import {
  createAction
} from 'redux-act';

import warning from 'warning';

import * as Utils from './Utils';
import {injectAsyncReducer} from './store';

export const StartLoadingModule = createAction(
  'Start Loading Module'
);
export const ErrorLoadingModule = createAction(
  'Error Loading Module'
);
export const SuccessLoadingModule = createAction(
  'Success Loading Module'
);

const LoadModuleAssets = async (dispatch, moduleName, store) => {
  const promises = [];

  const {css, js} = Utils.getBundle(moduleName);

  js.forEach(filename => {
    promises.push(
      new Promise(function (resolve, reject) {
        const script = document.createElement('script');
        script.async = 1;
        script.src = filename;
        script.onload = () => resolve(filename);
        script.onerror = () => reject(filename);
        document.body.appendChild(script);
      })
    )
  });

  css.forEach(filename => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = filename;
    document.head.appendChild(link);
  });

  try {
    await Promise.all(promises);

    if (window[moduleName].default.ReduxReducers) {
      injectAsyncReducer(store, moduleName, window[moduleName].default.ReduxReducers());
    }
    dispatch(
      SuccessLoadingModule(moduleName)
    );
  } catch (e) {
    warning(false, `Unable to load module ${moduleName}`, e);
    dispatch(
      ErrorLoadingModule(moduleName)
    );
  }
};

/**
 * Load module if it is not loaded already.
 *
 * @param {string} moduleName
 * @param {object} store
 * @returns {Function}
 * @constructor
 */
export const LoadModule = (moduleName, store) => {
  return function (dispatch, getState) {
    if (Utils.shouldLoadModule(getState(), moduleName) && Utils.canLoadModule(moduleName)) {
      dispatch(StartLoadingModule(moduleName));
      return LoadModuleAssets(dispatch, moduleName, store);
    }

    warning(false, `Will not load module ${moduleName}`);

  }
};