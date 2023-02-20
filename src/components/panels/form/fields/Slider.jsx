import { useState } from "react";
import { FormControlLabel, FormHelperText, Grid, Input, Slider, Switch } from "@mui/material";

const FormSlider = ({ id, name, label, options, required }) => {
    const [sliderValue, setSliderValue] = useState(90)
    const [unlimited, setUnlimited] = useState(false)
    const marks = options.map(option => ({
        value: option,
        label: option + ' days'
    }))

    const isNum = typeof sliderValue === 'number'

    const handleSliderChange = (event, newVal) => {
        if (newVal > 0 && newVal < 7) setSliderValue(7)
        else setSliderValue(newVal)
    }

    const handleInputChange = (event) => {
        let val = event.target.value
        let isEmpty = event.target.value === ''

        setSliderValue(isEmpty ? '' : Number(val))
    }

    const handleSwitchChange = () => {
        setUnlimited(!unlimited)
    }

    const handleInputBlur = () => {
        if (sliderValue === '') setSliderValue(0)
        else if (sliderValue === 0) setSliderValue(0)
        else if (sliderValue < 7 && sliderValue > 0) setSliderValue(7)
    }

    const getValueText = (value) => {
        return `${value} days`
    }

    return (
        <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs sx={{ marginLeft: '1.5rem' }}>
                    <Slider
                        step={1}
                        marks={marks}
                        value={isNum ? sliderValue : 0}
                        disabled={unlimited}
                        valueLabelDisplay="auto"
                        onChange={handleSliderChange}
                        getAriaValueText={getValueText} />
                </Grid>
                <Grid item>
                    <Input
                        sx={{ width: '5rem' }}
                        inputProps={{ min: 0, type: 'number' }}
                        value={sliderValue}
                        disabled={unlimited}
                        endAdornment="days"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur} />
                </Grid>
            </Grid>
            <FormHelperText>{label}</FormHelperText>
            <FormControlLabel control={
                <Switch value={unlimited} onChange={handleSwitchChange} />
            } label="Unlimited" sx={{marginTop: '1rem'}}/>
        </Grid>
    )
}

export default FormSlider
