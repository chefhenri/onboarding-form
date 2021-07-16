import React from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

import {SectionContext} from '../../contexts/section-context'

// TODO: Refactor context consumption
export default function FormTextArea(props) {
    const fieldProps = {
        id: props.id,
        name: props.name,
        type: props.type,
        label: props.text,
        required: props.required,
        variant: 'outlined',
        rows: 5,
        rowsMax: 10,
        fullWidth: true,
        multiline: true
    }

    return (
        <Grid item sm={12}>
            <SectionContext.Consumer>
                {({data, update}) => (
                    <TextField {...fieldProps} defaultValue={data[fieldProps.name] ? data[fieldProps.name].value : ''}
                               onChange={event => {
                                   update({
                                       ...data,
                                       [props.name]: {id: props.id, value: event.target.value, label: props.text}
                                   })
                               }}/>
                )}
            </SectionContext.Consumer>
        </Grid>
    )
}
