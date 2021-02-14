import React from "react";
import {KeyboardDatePicker} from "@material-ui/pickers";
import moment from "moment/moment";
import {Grid} from "@material-ui/core";
import {SectionContext} from "../../contexts/section-context";

export default function FormDatePicker(props) {
    const fieldProps = {
        id: props.id,
        name: props.name,
        label: props.text,
        required: props.required,
        value: props.selectedDate[props.name],
        variant: 'inline',
        inputVariant: 'outlined',
        format: 'MM/DD/yyyy',
        minDate: moment().day(),
        minDateMessage: 'Date should not be before today',
        disableToolbar: true,
        disablePast: true,
        fullWidth: true
    }

    return (
        // TODO: Refactor to reflect template changes
        <Grid item sm={6}>
            <SectionContext.Consumer>
                {({data, update}) => (
                    <KeyboardDatePicker {...fieldProps} onChange={date => {
                        props.handleDateChange(date, props.name)
                        update({
                            ...data,
                            [props.name]: {
                                id: props.id,
                                value: date,
                                label: props.text
                            }
                        })
                    }}/>
                )}
            </SectionContext.Consumer>
        </Grid>
    )
}
