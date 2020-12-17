import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Input = (props) => {
  const classes = useStyles();

  return <TextField className={classes.root} value={props.value} onChange={(e) => props.onChange(e.target.value)} />;
};

export default Input;
