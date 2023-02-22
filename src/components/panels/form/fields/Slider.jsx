import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { FormControlLabel, FormHelperText, Grid, Input, Slider, Switch } from "@mui/material";

import { update } from '../../../../slice.js'

const FormSlider = ({ id, name, label, options, required, _default = 90 }) => {
    const value = useSelector((state) => state.form[name])
    const dispatch = useDispatch()
    
    const isEmpty = value === ''
    const isNum = typeof value === 'number'
    const isBool = typeof value === 'boolean'
    const sliderDisabled = isBool && value

    const marks = options.map(option => ({
        value: option,
        label: option + ' days'
    }))

    const handleSliderChange = (event, newVal) => {
        // Set value to 7 when attempting to select values 1-6
        if (newVal > 0 && newVal < 7) dispatch(update({ name, label, value: 7 }))

        // Set value to selected value otherwise
        else dispatch(update({ name, label, value: newVal }))
    }

    const handleInputChange = (event) => {
        let val = event.target.value
        let isEmpty = event.target.value === ''

        // Allow 'empty' val within input field, otherwise update numerical value
        dispatch(update({ name, label, value: isEmpty ? '' : Number(val) }))
    }

    const handleSwitchChange = () => {
        // Reset slider, input to default when re-enabled
        if (isBool && value) dispatch(update({ name, label, value: _default }))

        // Set value to 'true' when 'unlimited' switch is checked
        else dispatch(update({ name, label, value: true }))
    }

    const handleInputBlur = () => {
        // Set the value to 0 when input value is deleted
        if (isEmpty) dispatch(update({ name, label, value: 0 }))

        // Set the value to 7 when attempting to enter values 1-6
        else if (value < 7 && value > 0) dispatch(update({ name, label, value: 7 }))
    }

    const getValueText = (value) => {
        return `${value} days`
    }

    // Init store record with default value: 90 days
    useEffect(() => {
        value === undefined
            && dispatch(update({ name, label, value: _default }))
    }, [])

    return (
        <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs sx={{ marginLeft: '1.5rem' }}>
                    <Slider
                        step={1}
                        marks={marks}
                        value={isNum ? value : 0}
                        disabled={sliderDisabled}
                        valueLabelDisplay="auto"
                        onChange={handleSliderChange}
                        getAriaValueText={getValueText} />
                </Grid>
                <Grid item>
                    <Input
                        sx={{ width: '5rem' }}
                        inputProps={{ min: 0, type: 'number' }}
                        value={isNum ? value : ''}
                        disabled={sliderDisabled}
                        endAdornment="days"
                        onChange={handleInputChange}
                        onBlur={handleInputBlur} />
                </Grid>
            </Grid>
            <FormHelperText>{label}</FormHelperText>
            <FormControlLabel control={
                <Switch checked={sliderDisabled} onChange={handleSwitchChange} />
            } label="Unlimited" sx={{ marginTop: '1rem' }} />
        </Grid>
    )
}

export default FormSlider
