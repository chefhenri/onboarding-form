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
    const labelId = props.text.toLowerCase().replace(' ', '-')

    return (
        <Grid item sm={6}>
            <FormControl className={classes.formControl} variant={"outlined"} fullWidth>
                <InputLabel id={labelId}>{props.text}</InputLabel>
                <Select name={props.name}
                        labelId={labelId}
                        label={props.text}
                        value={props.selectedItem}
                        onChange={props.handleChange}
                        displayEmpty
                        autoWidth>
                    {props.options[props.opt].map((value, idx) => (
                        <MenuItem key={`${value}SelectOpt`} value={idx}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}
