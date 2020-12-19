import React from "react";
import {KeyboardDatePicker} from "@material-ui/pickers";
import moment from "moment/moment";
import {Grid} from "@material-ui/core";

export default function FormDatePicker(props) {
    return (
        <Grid item sm={6}>
            <KeyboardDatePicker id={props.id}
                                name={props.name}
                                label={props.text}
                                variant={"inline"}
                                format={"MM/DD/yyyy"}
                                minDate={moment().day()}
                                minDateMessage={'Date should not be before today'}
                                required={props.required}
                                value={props.selectedDate[props.name]}
                                onChange={date => props.handleDateChange(date, props.name)}
                                disableToolbar
                                disablePast
                                fullWidth/>
        </Grid>
    )
}
