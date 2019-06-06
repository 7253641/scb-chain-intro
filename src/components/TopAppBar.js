import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "gatsby";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function TopAppBar(props) {
  const classes = useStyles();
  const { title } = props;
  const HomeLink = props => <Link to="/" {...props} />;
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            component={HomeLink}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
          {/* <Button color="inherit">登陆</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
