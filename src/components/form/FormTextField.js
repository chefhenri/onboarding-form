import React from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

export default function FormTextField(props) {
    return (
        <Grid item sm={6}>
            <TextField id={props.id} type={props.type} label={props.text} variant={"outlined"} required={props.required}
                       fullWidth/>
        </Grid>
    )
}
