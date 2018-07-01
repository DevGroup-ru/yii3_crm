import './index.scss';
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import i18next from 'i18next';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {i18next.t('Hi')}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const InstallerBar = withStyles(styles)(SimpleAppBar);

class Installer extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="CRM__installer">
        <InstallerBar/>
      </div>
    );
  }
}

export default {
  Installer
};