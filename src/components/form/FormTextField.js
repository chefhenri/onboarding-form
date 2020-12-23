import React from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

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
            <TextField {...fieldProps}/>
        </Grid>
    )
}
