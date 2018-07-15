import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import {AbstractStep} from './AbstractStep';
// import {connect} from 'react-redux';


class Step2 extends AbstractStep {
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
        Hello!!! {this.props.currentStep} of {JSON.stringify(this.props.nextStep)}
      </div>
    )
  }
}

export {Step2};