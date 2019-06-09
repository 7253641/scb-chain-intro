/* eslint-disable no-script-url */

import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <>
      <Title>学分余额</Title>
      <Typography component="p" variant="h4">
        1,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        截止 2019年6月9日
      </Typography>
      <div>
        <Link color="primary" href="https://eostracker.io/" target="_blank">
          区块链浏览器
        </Link>
      </div>
    </>
  );
}
