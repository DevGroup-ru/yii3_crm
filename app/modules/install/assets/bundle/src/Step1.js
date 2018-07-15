import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import {connect} from 'react-redux';
import {InstallationStepStart} from './actions';
import {AbstractStep} from './AbstractStep';
// import {connect} from 'react-redux';


class Step extends AbstractStep {
  static propTypes = {
    // currentStep: PropTypes.number.isRequired,
    // nextStep: PropTypes.oneOfType([
    //   PropTypes.number.isRequired,
    //   PropTypes.exact(false),
    // ]).isRequired
  };

  next() {
    console.log('Step1 next');
    this.props.NextStep(this.nextStep);
  }

  render() {
    return (
      <div>
        Hello {this.props.currentStep} of {JSON.stringify(this.props.nextStep)}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    NextStep: (step) => {
      dispatch(InstallationStepStart(step))
    }
  }
};
const Step1 = connect(() => ({}), mapDispatchToProps)(Step);
export {Step1};