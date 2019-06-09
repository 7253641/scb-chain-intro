import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { Link } from "gatsby";
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(5)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function StartButton() {
  const classes = useStyles();
  const TopicsLink = props => <Link to="/SCBBCTopic" {...props} />;
  return (
    <div>
      <Fab
        variant="extended"
        aria-label="Delete"
        className={classes.fab}
        component={TopicsLink}
        color="primary"
      >
        <NavigationIcon className={classes.extendedIcon} />
        学分银行 + 区块链
      </Fab>
      {/* <Fab disabled aria-label="Delete" className={classes.fab}>
        <DeleteIcon />
      </Fab> */}
    </div>
  );
}
