import React from "react";
import {Grid, Input} from "@material-ui/core";
import {styles} from "../../styles/form.styles";
import {SLIDER_MAX_VAL, SLIDER_MIN_VAL, SLIDER_STEP} from "../../utils/form.utils";

const FormSliderInput = ({id, name, value, isDisabled, handleBlur, handleChange}) => {
    const classes = styles()

    const inputConfig = {
        margin: 'dense',
        inputProps: {
            step: SLIDER_STEP,
            min: SLIDER_MIN_VAL,
            max: SLIDER_MAX_VAL,
            type: 'number'
        },
        disabled: isDisabled,
        className: classes.input
    }

    return (
        <Grid item>
            <Input
                {...inputConfig}
                id={id}
                name={name}
                value={value}
                onBlur={handleBlur}
                onChange={handleChange}/>
        </Grid>
    )
}

export default FormSliderInput
