import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";

function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3)
  },
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1)
  }
}));

export default function ProTip() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} color="textPrimary">
      <LightBulbIcon className={classes.lightBulb} />
      区块链是一种把区块以链的方式组合在一起的数据结构，它适合存储有先后顺序的、能在系统内验证的数据。它用密码学保证了数据的不可篡改和不可伪造。它基于对等网络技术在全网同步数据。它能够使参与者对全网交易记录的事件顺序和当前状态建立共识。它可以运行智能合约代码在参与者间完成可信的、可靠的、自动化执行的价值转移。
    </Typography>
  );
}
