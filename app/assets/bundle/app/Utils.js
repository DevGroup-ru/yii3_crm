import warning from 'warning';

export const AvailableModules = window.Yii3CRM__availableModules || {};

export const shouldLoadModule = (state, moduleName) => {
  const module = state[moduleName];

  return module === undefined || module === 'error';
};

export const canLoadModule = (moduleName) => {
  const moduleDefined = AvailableModules[moduleName] || false;
  if (moduleDefined === false) {
    warning(false, `Module ${moduleName} is not defined in window.Yii3CRM__availableModules`);
  }
  return moduleDefined;
};

export const getBundle = (moduleName) => AvailableModules[moduleName].bundle;