import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloudDoneIcon from '@material-ui/icons/CloudDone';

const DynamicOne = props => (
    <>
        <Button
            color="primary"
            variant="contained"
            onClick={props.onClick || null}>
            <CloudDoneIcon/>
        </Button>
        <Typography>I am dynamic!</Typography>
    </>
);

export default DynamicOne;
