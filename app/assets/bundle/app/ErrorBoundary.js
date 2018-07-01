import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="AdminPanel__error">
          <h1>Error happened</h1>
          <h2>{this.state.error.toString()}</h2>
          <pre>{this.state.info.componentStack}</pre>
        </div>
      )
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
};

export default ErrorBoundary;