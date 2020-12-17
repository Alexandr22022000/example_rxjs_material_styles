import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const User = (props) => (
  <ListItem button>
    <ListItemIcon>
      <AccountCircleIcon />
    </ListItemIcon>
    <ListItemText primary={props.children.login} />
  </ListItem>
);

export default User;
