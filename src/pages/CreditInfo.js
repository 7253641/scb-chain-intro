import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="500"
        // width="1000"
        image="/images/credit/Digital-Certificate-6.jpg"
        title=""
      />
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://blockcerts.learningmachine.com/certificate/fe53b323df845641b74e8d3f6d175ea0"
          target="_blank"
        >
          区块链证书ID：0xfe53b323df845641b74e8d3f6d175ea0
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
