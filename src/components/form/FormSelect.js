import React from "react";
import {FormControl, Grid, MenuItem} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}))

export default function FormSelect(props) {
    const classes = styles()

    const selectProps = {
        id: props.id,
        name: props.name,
        label: props.text,
        labelId: props.text
            .toLowerCase()
            .replace(' ', '-'),
        value: props.item[props.name],
        displayEmpty: true,
        autoWidth: true
    }

    return (
        // TODO: Add context consumer
        <Grid item sm={6}>
            <FormControl className={classes.formControl} variant={"outlined"} required={props.required} fullWidth>
                <InputLabel id={selectProps.labelId}>{props.text}</InputLabel>
                <Select {...selectProps} onChange={props.handleItemChange}>
                    {props.options.map((value, idx) => (
                        <MenuItem key={`${value}-opt`} value={idx}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}
