import React from "react";
import {DatePicker} from "@material-ui/pickers";
import {Grid} from "@material-ui/core";
import {SectionContext} from "../../contexts/section-context";
import {DateTime as DT} from "luxon";

export default function FormDatePicker(props) {
    const fieldProps = {
        id: props.id,
        name: props.name,
        label: props.text,
        required: props.required,
        variant: 'inline',
        inputVariant: 'outlined',
        format: 'MM/dd/yyyy',
        minDate: DT.local(),
        minDateMessage: 'Date should not be before today',
        autoOk: true,
        disableToolbar: true,
        disablePast: true,
        fullWidth: true
    }

    return (
        <Grid item sm={6}>
            <SectionContext.Consumer>
                {({data, update}) => (
                    <DatePicker {...fieldProps} value={data[fieldProps.name] ? data[fieldProps.name].value : DT.local()}
                                onChange={date => {
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
