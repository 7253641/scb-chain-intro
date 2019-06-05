import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function BCPWord() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          School Credit Bank
        </Typography> */}
        <Typography variant="h5" component="h2">
          区块链 +
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Block Chain
        </Typography>
        <Typography variant="body2" component="p">
          区块链 +
          是指利用区块链技术具备的去中心化、分布式、防篡改、高透明和可追溯的特性去创造全新的应用场景，或者改革已有的应用场景，产生新的用户价值。
          总结起来技术链改就是用区块链中的部分技术原理和功能特性来改造业务系统中的技术部分，以打造更高效，或者更有公信力的业务系统。
          {/* <br />
          {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">了解更多</Button>
      </CardActions>
    </Card>
  );
}
