import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {Grid} from "@material-ui/core";

export default function FormSwitch(props) {
    const switchProps = {
        id: props.id,
        name: props.name,
        checked: props.checkedState[props.name],
        onChange: props.handleChange,
        color: 'primary'
    }

    return (
        <Grid item sm={6}>
            {/* TODO: Add context consumer */}
            <FormControlLabel control={<Switch {...switchProps}/>} label={props.text}/>
        </Grid>
    )
}
