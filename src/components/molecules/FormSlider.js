import React from "react";
import {Grid, Slider} from "@material-ui/core";

const FormSlider = ({id, name, value, checked, option, options, className, handleChange}) => {
    const sliderProps = {
        id: id,
        name: name,
        className: className,
        defaultValue: 90,
        value: typeof value === 'number' ? value : 0,
        marks: options[option],
        step: 1,
        min: 0,
        valueLabelDisplay: 'auto',
        disabled: checked,
    }

    const valueText = (value) => {
        return `${value} Days`
    }

    const labelFormat = (value) => {
        return value
    }

    return (
        <Grid item sm>
            <Slider {...sliderProps}
                    getAriaValueText={valueText}
                    valueLabelFormat={labelFormat}
                    onChange={handleChange}/>
        </Grid>
    )
}

export default FormSlider
