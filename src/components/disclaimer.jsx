import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  footer: {
    position: 'sticky',
    left:0,
    bottom:0,
    right:0
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className={classes.footer}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Disclaimer:
        </Typography>
        <Typography component="p">
          We are not part of the Paydro Live organization. We are not funded by Paydro for this website.
          We do not own the Paydro Logo. All rights reserved.
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);