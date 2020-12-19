import React from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

export default function FormTextArea(props) {
    return (
        <Grid item sm={12}>
            <TextField id={props.id}
                       name={props.name}
                       type={props.type}
                       label={props.text}
                       variant={"outlined"}
                       required={props.required}
                       rows={5} rowsMax={10}
                       fullWidth
                       multiline/>
        </Grid>
    )
}
