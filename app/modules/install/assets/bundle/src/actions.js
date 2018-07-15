import {
  createAction
} from 'redux-act';

export const InstallationStepStart = createAction(
  'InstallationStepStart'
);
export const InstallationStepEnd = createAction(
  'InstallationStepEnd'
);
export const InstallationEnd = createAction(
  'InstallationEnd'
);

