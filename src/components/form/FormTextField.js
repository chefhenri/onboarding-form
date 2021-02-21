import React from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";
import {SectionContext} from "../../contexts/section-context";

export default function FormTextField(props) {
    const fieldProps = {
        id: props.id,
        name: props.name,
        type: props.type,
        label: props.text,
        required: props.required,
        variant: 'outlined',
        fullWidth: true
    }

    return (
        <Grid item sm={6}>
            <SectionContext.Consumer>
                {({data, update}) => (
                    <TextField {...fieldProps} defaultValue={''} onChange={event => {
                        update({...data, [props.name]: {id: props.id, value: event.target.value, label: props.text}})
                    }}/>
                )}
            </SectionContext.Consumer>
        </Grid>
    )
}
