import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Recipe"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            className={classes.avatar}
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="XXX 注册日期：2019年6月9日"
        subheader="区块链ID：0x9b948d24ab1d2a45"
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          学分银行的朋友们，大家好！我叫XXX，96年作为一名普通的大学生，毕业于一所西北的普通高校。现居广东珠海。观摩学习了两周，先交一份自我介绍吧。我刚参加工作到了一家航空部的企业做设计员。从设计员做起，直到开发技术管理。
          在学习的道路上，走了无数多的弯路。我有一个优点，就是做一行爱一行，进入了，就努力的去学。感谢学分银行接纳我的加入，能和大家一起学习进步。
        </Typography>

        <Chip
          icon={<FaceIcon />}
          label="前端开发"
          clickable
          className={classes.chip}
          color="primary"
          deleteIcon={<DoneIcon />}
        />
        <Chip
          avatar={<Avatar>R</Avatar>}
          label={"React.js"}
          clickable
          className={classes.chip}
          color="secondary"
        />
        <Chip
          avatar={<Avatar>V</Avatar>}
          label={"Vue.js"}
          clickable
          className={classes.chip}
          color="secondary"
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>姓名：XXX</Typography>
          <Typography paragraph>性别：男</Typography>
          <Typography paragraph>生日：1972年6月7日</Typography>
          <Typography paragraph>所在地：珠海</Typography>
          <Typography paragraph>职业：前端开发工程师</Typography>
          <Typography paragraph>最高学历：硕士</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeReviewCard;
