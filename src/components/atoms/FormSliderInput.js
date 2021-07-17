import React from "react";
import {Grid, Input} from "@material-ui/core";

const FormSliderInput = ({id, name, value, disabled, className, handleChange}) => {
    const inputProps = {
        id: id + '-custom-value',
        name: name,
        className: className,
        value: value,
        margin: 'dense',
        inputProps: {
            step: 1,
            min: 0,
            max: 500,
            type: 'number'
        },
        disabled: disabled
    }

    return (
        <Grid item>
            <Input {...inputProps} onChange={handleChange}/>
        </Grid>
    )
}

export default FormSliderInput
