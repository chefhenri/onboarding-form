import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { FormControlLabel, FormHelperText, Grid, Input, Slider, Switch } from "@mui/material";

import { update } from '../../../../slice.js'

// TODO: Handle numerical value vs boolean value
const FormSlider = ({ id, name, label, options, required, _default = 90 }) => {
    const value = useSelector((state) => state.form[name])
    const dispatch = useDispatch()
    // const [sliderValue, setSliderValue] = useState(90)
    // const [unlimited, setUnlimited] = useState(false)

    const marks = options.map(option => ({
        value: option,
        label: option + ' days'
    }))

    const isNum = typeof value === 'number'
    const isBool = typeof value === 'boolean'

    const handleSliderChange = (event, newVal) => {
        if (newVal > 0 && newVal < 7) {
            // setSliderValue(7)
            dispatch(update({ name, label, value: 7 }))
        }
        else {
            // setSliderValue(newVal)
            dispatch(update({ name, label, value: newVal }))
        }
    }

    const handleInputChange = (event) => {
        let val = event.target.value
        let isEmpty = event.target.value === ''

        // setSliderValue(isEmpty ? '' : Number(val))

        dispatch(update({ name, label, value: isEmpty ? '' : Number(val) }))
    }

    const handleSwitchChange = () => {
        // setUnlimited(!unlimited)
        dispatch(update({ name, label, value: isBool ? !value : true }))
    }

    const handleInputBlur = () => {
        if (value === '' || value === 0) {
            // setSliderValue(0)
            dispatch(update({ name, label, value: 0 }))
        }
        else if (value < 7 && value > 0) {
            // setSliderValue(7)
            dispatch(update({ name, label, value: 7 }))
        }
    }

    const getValueText = (value) => {
        return `${value} days`
    }

    useEffect(() => {
        value === undefined
            && dispatch(update({ name, label, value: _default }))
    })

    return (
        <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs sx={{ marginLeft: '1.5rem' }}>
                    <Slider
                        step={1}
                        marks={marks}
                        value={isNum ? value : 0}
                        disabled={isBool && value}
                        valueLabelDisplay="auto"
                        onChange={handleSliderChange}
                        getAriaValueText={getValueText} />
                </Grid>
                <Grid item>
                    <Input
                        sx={{ width: '5rem' }}
                        inputProps={{ min: 0, type: 'number' }}
                        value={isNum ? value : ''}
                        disabled={isBool && value}
                        endAdornment="days"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur} />
                </Grid>
            </Grid>
            <FormHelperText>{label}</FormHelperText>
            <FormControlLabel control={
                <Switch value={isBool ? value : false} onChange={handleSwitchChange} />
            } label="Unlimited" sx={{ marginTop: '1rem' }} />
        </Grid>
    )
}

export default FormSlider
