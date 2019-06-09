import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby";
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

export default function BCWord() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const BCTopicsLink = props => <Link to="/bctopic" {...props} />;
  return (
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          School Credit Bank
        </Typography> */}
        <Typography variant="h5" component="h2">
          区块链
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Block Chain
        </Typography>
        <Typography variant="body2" component="p">
          区块链本质上是一个共享、可信的公共分步式账本,任何人都可以对它进行核查，但不存在一个单一的用户可以对它进行控制。在区块链系统中的参与者们，会共同维持总账的更新。区块链让人们在互不信任，并没有中立中央机构的情况下，能够做到互相协作。简单地说，它是一台创造信任的机器。
          {/* <br />
          {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={BCTopicsLink}>
          了解更多
        </Button>
      </CardActions>
    </Card>
  );
}
