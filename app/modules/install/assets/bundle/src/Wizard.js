import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import i18next from 'i18next';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import {InstallationStepStart, InstallationEnd} from './actions';

const styles = theme => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  buttonsRow: {
    padding: theme.spacing.unit * 2,
    textAlign: 'right',
  },
});

class Wizard extends React.Component {
  static propTypes = {
    step: PropTypes.number,
    steps: PropTypes.arrayOf(
      PropTypes.func.isRequired
    ).isRequired,
    classes: PropTypes.object.isRequired,

  };

  stepsComponents = {};
  stepsInstances = {};

  constructor(props) {
    super(props);
    let i = 1;
    props.steps.forEach(step => {
      // debugger;
      this.stepsComponents[i] = React.createElement(
        step,
        {
          currentStep: i,
          nextStep: i === props.steps.length ? false : i,
        }
      );
      i++;
    });

  }

  nextStep = () => {
    this.stepsInstances[this.props.step].next();
    return false;
  };

  render() {
    const {classes, steps, step} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {this.stepsComponents[step] && this.stepsComponents[step]}
              <div className={classes.buttonsRow}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.nextStep}>
                  {i18next.t('Next step')}
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const StyledWizard = withStyles(styles)(Wizard);
const mapStateToProps = function(store) {
  return {
    step: store.InstallerModule &&
      store.InstallerModule.installationWizard &&
      store.InstallerModule.installationWizard.step,
  }
};



const ConnectedWizard = connect(mapStateToProps)(StyledWizard);
export {ConnectedWizard };