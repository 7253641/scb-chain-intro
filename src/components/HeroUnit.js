import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import BCTIntro from "./BCTIntro";
import SCIntro from "./SCIntro";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function HeroUnit() {
  const classes = useStyles();
  return (
    <>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              区块链学分银行
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              个人信用是这个世界货币财富的唯一度量衡，评判依据是坚不可摧的数学逻辑和代码逻辑。
            </Typography>
            <Typography
              variant="h5"
              align="right"
              color="textSecondary"
              paragraph
            />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                  >
                    Main call to action
                  </Button> */}
                  <BCTIntro />
                </Grid>
                <Grid item>
                  {/* <Button variant="outlined" color="primary">
                    Secondary action
                  </Button> */}
                  <SCIntro />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
