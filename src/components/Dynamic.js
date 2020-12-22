import React, {useState} from 'react';
import useDynamic from "../hooks/useDynamic";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "400px",
        margin: "20px",
        paddingTop: "8px",
        maxHeight: theme.card.size,
        overflowY: "auto",
        display: 'inline-block',
        verticalAlign: 'top',
    },
}));

const Dynamic = props => {
    const classes = useStyles();
    const [route, setRoute] = useState(null);
    const Component = useDynamic(route);

    return (
        <Paper className={classes.root}>
            <Button
                color="primary"
                variant="contained"
                onClick={() => setRoute('DynamicOne')}>
                    ONE
            </Button>
            <Button
                color="primary"
                variant="contained"
                onClick={() => setRoute('DynamicTwo')}>
                    TWO
            </Button>

            <h3>{Component.status}</h3>

            <Component onClick={() => setRoute('DynamicTwo')}/>
        </Paper>
    );
};

export default Dynamic;
