import React from "react";
import {FormControl, Grid, MenuItem} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/core/styles";
import {SectionContext} from "../../contexts/section-context";

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
        displayEmpty: true,
        autoWidth: true
    }

    return (
        <Grid item sm={6}>
            <FormControl className={classes.formControl} variant={"outlined"} required={props.required} fullWidth>
                <InputLabel id={selectProps.labelId}>{props.text}</InputLabel>
                <SectionContext.Consumer>
                    {({data, update}) => (
                        <Select {...selectProps} value={data[selectProps.name] ? data[selectProps.name].idx : ''}
                                onChange={event => {
                                    update({
                                        ...data,
                                        [props.name]: {
                                            id: props.id,
                                            idx: event.target.value,
                                            value: props.options[event.target.value],
                                            label: props.text
                                        }
                                    })
                                }}>
                            {props.options.map((value, idx) => (
                                <MenuItem key={`${value}-opt`} value={idx}>{value}</MenuItem>
                            ))}
                        </Select>
                    )}
                </SectionContext.Consumer>
            </FormControl>
        </Grid>
    )
}
