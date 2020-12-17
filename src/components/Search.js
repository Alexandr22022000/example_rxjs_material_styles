import React from "react";
import useSearch from "../hooks/useSearch";
import Input from "./Input";
import User from "./User";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
    margin: "20px",
    paddingTop: "8px",
  },
  list: {
    overflowY: "auto",
    maxHeight: theme.card.size,
  },
  input: {
    margin: "0 10px",
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [result, search, onSearch] = useSearch();

  return (
    <Paper className={classes.root}>
      <div className={classes.input}>
        <Input value={search} onChange={onSearch} />
      </div>
      <List className={classes.list}>
        {result.map((item, key) => (
          <User key={key + "user"}>{item}</User>
        ))}
      </List>
    </Paper>
  );
};

export default Search;
