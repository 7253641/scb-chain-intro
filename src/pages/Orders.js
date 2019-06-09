/* eslint-disable no-script-url */

import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(
  id,
  date,
  name,
  shipTo,
  paymentMethod,
  amount,
  url,
  credit
) {
  return { id, date, name, shipTo, paymentMethod, amount, url, credit };
}

const rows = [
  createData(
    0,
    "0x327be2c1",
    "2019年3月15日",
    "Blockchain",
    "Understanding Its Uses and Implications",
    "进行中",
    "https://www.edx.org/course/understanding-blockchain-and-its-implications"
  ),
  createData(
    1,
    "0x327be2c2",
    "2019年3月16日",
    "Blockchain",
    "An Introduction to Hyperledger Technologies",
    "进行中",
    "https://www.edx.org/course/blockchain-for-business-an-introduction-to-hyperledger-technologies"
  ),
  createData(
    2,
    "0x327be2c4",
    "2019年3月17日",
    "Blockchain",
    "Blockchain and FinTech: Basics, Applications, and Limitations",
    "进行中",
    "https://www.edx.org/course/blockchain-and-fintech-basics-applications-and-limitations"
  ),
  createData(
    3,
    "0x327be2c5",
    "2019年3月18日",
    "FinTech",
    "Introduction to FinTech",
    "进行中",
    "https://www.edx.org/course/introduction-to-fintech"
  ),
  createData(
    4,
    "0x327be2c3",
    "2019年3月16日",
    "AI",
    "Learning Machine",
    "已发证",
    "https://www.edx.org/course/machine-learning",
    "/Credit"
  )
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <>
      <Title>本周学习课程</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>区块链课程ID</TableCell>
            <TableCell>开课时间</TableCell>
            <TableCell>课程分类</TableCell>
            <TableCell>课程名称</TableCell>
            <TableCell>状态</TableCell>
            {/* <TableCell align="right">状态</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell
                component={Link}
                href={row.url}
                target="_blank"
                variant="inherit"
              >
                {row.paymentMethod}
              </TableCell>
              {/* <TableCell
                component={Link}
                href={row.credit}
                target="_blank"
                variant="inherit"
              >
                {row.amount}
              </TableCell> */}
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          查看更多
        </Link>
      </div>
    </>
  );
}
