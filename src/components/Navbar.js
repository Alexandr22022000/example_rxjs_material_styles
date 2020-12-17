import React from "react";
import useTheme from "../hooks/useTheme";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [theme, setTheme] = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          DEMO
        </Typography>

        <Switch
          checked={theme.palette.type !== "dark"}
          onChange={() => {
            setTheme({
              palette: {
                type: theme.palette.type === "dark" ? "light" : "dark",
              },
            });
          }}
          name="checkedB"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
