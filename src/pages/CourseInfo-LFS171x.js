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
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/images/cards/asset-v1_LinuxFoundation.jpg"
          title="Blockchain: Understanding Its Uses and Implications"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Blockchain: Understanding Its Uses and Implications
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            BlockchainFoundationX - LFS170x
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            已经开课 - 2018年8月1日
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          区块链课程ID：0x327be2c9
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
