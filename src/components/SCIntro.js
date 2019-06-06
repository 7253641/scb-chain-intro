import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import StarIcon from "@material-ui/icons/Star";
import SCProTip from "./SCProTip";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SCIntro() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        代码逻辑
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              代码逻辑
            </Typography>
            {/* <Button color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <List className={classes.root}>
          <ListItem>
            <SCProTip />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText
              primary="非对称加密"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    即在加密和解密的过程中使用一个“密钥对”，“密钥对”中的两个密钥具有非对称的特点，即在信息发送过程中，发送方通过一把密钥将信息加密，接收方在收到信息后，只有通过配对的另一把密钥才能对信息进行解密。非对称加密使得任何参与者更容易达成共识，将价值交换中的摩擦边界降到最低，还能实现透明数据后的匿名性，保护个人隐私。
                  </Typography>
                  {/* {" — Wish I could come, but I'm out of town this…"} */}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText
              primary="哈希算法"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    区块的链的结构是由创世区块（第一个区块）向后通过区块之间的指针进行连接，这个指针使用的就是哈希指针.每个区块中都存储了前一个区块的哈希指针。这样的数据结构的好处在于后面区块可以查找前面所有区块中的信息且区块的哈希指针的计算包含了前面区块的信息，从而一定程度上保证了区块链的不易篡改的特性。
                  </Typography>
                  {/* {" — Do you have Paris recommendations? Have you ever…"} */}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText
              primary="共识机制"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    交易必须按照发生的顺序写在分类账上，即使它们可能位于网络中不同的参与者之间。为了做到这一点，必须建立交易的顺序，并且必须建立一种拒绝错误地(或恶意地)插入分类账的不良交易的算法。
                  </Typography>
                  {/* {" — I'll be in your neighborhood doing errands this…"} */}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText
              primary="智能合约"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    简单地说，智能合约就是传统合约的数字化版本。它们是在区块链数据库上运行的计算机程序，可以在满足其源代码中写入的条件时自行执行。智能合约一旦编写好就可以被用户信赖，合约条款不能被改变，因此合约是不可更改的。
                  </Typography>
                  {/* {" — Do you have Paris recommendations? Have you ever…"} */}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText
              primary="匿名性"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    除非有法律规范要求，单从技术上来讲，各区块节点的身份信息不需要公开或验证，信息传递可以匿名进行。
                  </Typography>
                  {/* {" — Do you have Paris recommendations? Have you ever…"} */}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Dialog>
    </div>
  );
}

export default SCIntro;
