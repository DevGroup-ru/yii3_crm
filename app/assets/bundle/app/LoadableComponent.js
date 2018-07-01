import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {LoadModule} from './actions';


export default function(moduleName, componentName, store, props = []) {

  class LoadableComponent extends React.Component {
    static propTypes = {
      loaded: PropTypes.any,
      LoadModule: PropTypes.func.isRequired,
    };

    componentWillMount() {
      if (this.props.loaded === undefined) {
        this.props.LoadModule(store);
      }
    }

    render() {
      if (this.props.loaded === true) {
        if (window[moduleName] === undefined) {
          throw `Could not find module ${moduleName}. Module doesn't export himself?`;
        }

        if (window[moduleName].default[componentName] === undefined) {
          throw `Could not find component ${componentName} in ${moduleName} module. Component is not exported in module?`;
        }

        return React.createElement(window[moduleName].default[componentName], props);
      } else if (this.props.loaded === 'error') {

        throw `Unable to load ${moduleName} with component ${componentName}. Check network tab in dev tools and your AssetBundle for wrong 404 assets.`;

      } else {
        return (
          <div className="CRM__LoadableComponent--isLoading">
            <div className="spinner">Loading</div>
          </div>
        )
      }
    } // /render
  } // LoadableComponent

  const mapStateToProps = function(store) {
    return {
      loaded: (store.LoadedModules && store.LoadedModules[moduleName]) || undefined,
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      LoadModule: (store) => {
        dispatch(LoadModule(moduleName, store))
      }
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(LoadableComponent);
}