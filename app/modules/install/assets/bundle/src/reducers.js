import {createReducer as createActReducer} from 'redux-act';
import {InstallationStepEnd, InstallationStepStart} from './actions';

const InstallationWizardReducer = createActReducer({
  [InstallationStepStart]: (state, step) => {
    console.log('start', state, step);
    return {...state, step};
  },
  [InstallationStepEnd]: (state, step) => {
    console.log('end', state, step);
    return {...state, step};
  },
}, {step: 0});

export default function () {
  console.log('reducer init in iw');
  return {
    installationWizard: (state = {step: 0}, ...args) => {
      console.log('iw', state, args);
      return InstallationWizardReducer(state, ...args);
    }
  };
}