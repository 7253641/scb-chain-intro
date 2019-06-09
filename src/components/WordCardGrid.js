import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SCBWord from "./SCBWord";
import BCWord from "./BCWord";
import BCPWord from "./BCPWord";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 306,
    width: 280
  },
  control: {
    padding: theme.spacing(2)
  }
}));

function SCBWordGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  return (
    <Grid container className={classes.root} spacing={100}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid key={1} item>
            <Paper className={classes.paper}>
              <SCBWord />
            </Paper>
          </Grid>
          <Grid key={2} item>
            <Paper className={classes.paper}>
              <BCWord />
            </Paper>
          </Grid>
          <Grid key={3} item>
            <Paper className={classes.paper}>
              <BCPWord />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SCBWordGrid;
