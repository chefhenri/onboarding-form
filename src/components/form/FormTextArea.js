import React from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

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
            <TextField {...fieldProps}/>
        </Grid>
    )
}
