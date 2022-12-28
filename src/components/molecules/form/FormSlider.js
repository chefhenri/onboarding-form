import React from "react";

import {Grid, Slider} from "@mui/material";

import {getLabelFmt, getValueText, SLIDER_DEFAULT_VAL, SLIDER_MIN_VAL, SLIDER_STEP} from "../../../utils/form.utils";

import {styles} from "../../../styles/form.styles";

const FormSlider = ({id, name, value, isDisabled, markOpts, handleChange}) => {
    const classes = styles()

    const sliderConfig = {
        min: SLIDER_MIN_VAL,
        step: SLIDER_STEP,
        defaultValue: SLIDER_DEFAULT_VAL,
        disabled: isDisabled,
        marks: markOpts,
        valueLabelDisplay: 'auto',
        className: classes.slider,
        valueLabelFormat: getLabelFmt,
        getAriaValueText: getValueText
    }

    return (
        <Grid item sm>
            <Slider
                {...sliderConfig}
                id={id}
                name={name}
                value={typeof value === 'number' ? value : 0}
                onChange={handleChange}/>
        </Grid>
    )
}

export default FormSlider
