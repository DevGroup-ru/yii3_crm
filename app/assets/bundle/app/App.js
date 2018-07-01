import React from 'react';
import PropTypes from 'prop-types';
import {AvailableModules} from './Utils';
import LoadableComponent from './LoadableComponent';
import RouteNotFound from './RouteNotFound';
import ErrorBoundary from './ErrorBoundary';
import {Switch} from 'react-router';
import {Route, Link} from 'react-router-dom';


class App extends React.Component {
  routes = [];

  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    let routeIndex = 0;

    Object.keys(AvailableModules).forEach(moduleName => {
      const module = AvailableModules[moduleName];
      module.routes.forEach(routeItem => {
        const {route, component, ...props} = routeItem;
        this.routes.push(
          <Route
            path={route}
            component={
              LoadableComponent(
                moduleName,
                component,
                this.props.store
              )
            }
            key={routeIndex++}
            {...props}
          />
        );
      });
    }); // routes
  }


  render() {
    return (
      <div>
        <ErrorBoundary>
          <Switch>
            {this.routes}
            <Route component={RouteNotFound}/>
          </Switch>

        </ErrorBoundary>
        <Link to="/installer/">Run installer</Link>
      </div>

    );
  }
}

export default App;