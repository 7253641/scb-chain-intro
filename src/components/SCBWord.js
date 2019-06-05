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

export default function SCBWord() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          School Credit Bank
        </Typography> */}
        <Typography variant="h5" component="h2">
          学分银行
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          School Credit Bank
        </Typography>
        <Typography variant="body2" component="p">
          学分银行是模拟、借鉴银行的功能和特点，以学分为计量单位，按照共同的参照标准，以信息平台为支撑，通过专门的认证服务机构对学习者的各类学习成果进行统一的认证与核算，使其在各个阶段通过各种途径获得的学分得到积累或转换。这是在国际上逐步通行并日趋成熟的一种新型教育教学管理制度。
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
