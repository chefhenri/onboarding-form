import React from "react";
import {KeyboardDatePicker} from "@material-ui/pickers";
import moment from "moment/moment";
import {Grid} from "@material-ui/core";

export default function FormDatePicker(props) {
    const fieldProps = {
        id: props.id,
        name: props.name,
        label: props.text,
        required: props.required,
        value: props.selectedDate[props.name],
        variant: 'inline',
        format: 'MM/DD/yyyy',
        minDate: moment().day(),
        minDateMessage: 'Date should not be before today',
        disableToolbar: true,
        disablePast: true,
        fullWidth: true,
        onChange: date => props.handleDateChange(date, props.name)
    }

    return (
        <Grid item sm={6}>
            {/* TODO: Add context consumer */}
            <KeyboardDatePicker {...fieldProps}/>
        </Grid>
    )
}
