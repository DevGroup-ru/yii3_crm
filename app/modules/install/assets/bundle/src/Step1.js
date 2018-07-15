import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
// import {connect} from 'react-redux';


class Step1 extends React.Component {
  static propTypes = {
    // currentStep: PropTypes.number.isRequired,
    // nextStep: PropTypes.oneOfType([
    //   PropTypes.number.isRequired,
    //   PropTypes.exact(false),
    // ]).isRequired
  };

  render() {
    return (
      <div>
        Hello {this.props.currentStep} of {JSON.stringify(this.props.nextStep)}
      </div>
    )
  }
}

export {Step1};