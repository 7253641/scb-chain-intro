import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "gatsby";
import Divider from "@material-ui/core/Divider";

export default function mainListItems() {
  const HomeLink = props => <Link to="/" {...props} />;
  const UserLink = props => <Link to="/User" {...props} />;
  const CourseLink = props => <Link to="/Course" {...props} />;
  return (
    <div>
      <ListItem button component={UserLink}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="学生信息" />
      </ListItem>

      <ListItem button component={CourseLink}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="已选课程" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="学习过程" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="证书认证" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="数字仪表盘" />
      </ListItem>

      <Divider />
      <ListItem button component={HomeLink}>
        <ListItemIcon>
          <CloseIcon />
        </ListItemIcon>
        <ListItemText primary="退出" />
      </ListItem>
    </div>
  );
}

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );

// export const closeListItems = (
//   <div>
//     {/* <ListSubheader inset>Saved reports</ListSubheader> */}
//     <ListItem button component={HomeLink}>
//       <ListItemIcon>
//         <CloseIcon />
//       </ListItemIcon>
//       <ListItemText primary="退出" />
//     </ListItem>
//   </div>
// );
