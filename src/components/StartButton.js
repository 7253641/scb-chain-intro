import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

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

  return (
    <div>
      {/* <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon>edit_icon</Icon>
      </Fab> */}
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        学分银行 + 区块链
      </Fab>
      {/* <Fab disabled aria-label="Delete" className={classes.fab}>
        <DeleteIcon />
      </Fab> */}
    </div>
  );
}
