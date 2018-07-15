import {createReducer as createActReducer} from 'redux-act';
import {InstallationStepEnd, InstallationStepStart} from './actions';
import { combineReducers } from 'redux';


const InstallationWizardReducer = createActReducer({
  [InstallationStepStart]: (state, step) => {
    step++;
    return {...state, step};
  },
}, {step: 0});

export default function (...args) {
  return combineReducers({
    installationWizard: (state = {step: 1}, ...args) => {
      return InstallationWizardReducer(state, ...args);
    },
  });
}