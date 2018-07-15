import 'normalize.css/normalize.css';
import './app.scss';

import ReactDOM from 'react-dom';
import * as ReactRouterExport from 'react-router-dom';

import React from 'react';
import classNames from 'classnames';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import MuiTheme from './MuiTheme';
import * as MaterialUI from '@material-ui/core';
import 'whatwg-fetch';
import JssProvider from 'react-jss/lib/JssProvider';
import {createGenerateClassName} from '@material-ui/core/styles';
import * as ReduxForm from 'redux-form';
import yup from 'yup';
import * as ReduxFormYup from 'redux-form-yup';
import * as ReduxAct from 'redux-act';
import ReduxThunk from 'redux-thunk';
import PropTypes from 'prop-types';
import configureStore from './store';
import LoadableComponent from './LoadableComponent';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import LngDetector from 'i18next-browser-languagedetector';
import App from './App';
import DevTools from './DevTools';
// Build the middleware for intercepting and dispatching navigation actions

const Provider = ReactRedux.Provider;
const {
  MuiThemeProvider,
} = MaterialUI;

if (window.DotPlantAdminPanel__ReduxReducers === undefined) {
  window.DotPlantAdminPanel__ReduxReducers = {};
}

const store = configureStore({});

class CRM extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <JssProvider generateClassName={createGenerateClassName()}>
            <MuiThemeProvider theme={MuiTheme}>
              <App history={history} store={store} />
              <DevTools />
            </MuiThemeProvider>
          </JssProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
i18next
  .use(LngDetector)
  .use(XHR)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      debug: true,
    },
    debug: true,
    defaultNS: 'frontend',
    ns: 'frontend',
    fallbackLng: window.Yii3CRM__defaultLanguage,
    // preload: [window.Yii3CRM__defaultLanguage]
  }, () => {

    if (document.getElementById('CRM__root')) {
      ReactDOM.render(
        <CRM/>
        ,
        document.getElementById('CRM__root')
      );
    }
  });


const RouterHistory = history;

export {
  React,
  ReactDOM,
  ReactRouterExport,
  CRM,
  MaterialUI,
  classNames,
  RouterHistory,
  Redux,
  ReactRedux,

  ReduxForm,

  ReduxAct,
  ReduxThunk,
  PropTypes,
  LoadableComponent,
  yup,
  ReduxFormYup,
  i18next,
};
