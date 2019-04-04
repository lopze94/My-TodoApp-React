import React, { Component } from 'react'
//import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

export class AppFooter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} style={{ padding: "20px" }}>
        <Grid container>
          <Grid item xs={6}>
            This is the footer on the left
          </Grid>
          <Grid item xs={6}>
            This is the footer text on the right
          </Grid>
        </Grid>
      </div>
    );
  }
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppFooter);
