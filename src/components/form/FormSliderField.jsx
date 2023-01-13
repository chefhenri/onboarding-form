import {Chip, Divider, Grid, Input, Slider, Typography} from "@mui/material";
import {useState} from "react";

const marks = [
    {
        value: 0,
        label: '0 Days',
    },
    {
        value: 7,
        label: '7 Days',
    },
    {
        value: 30,
        label: '30 Days',
    },
    {
        value: 60,
        label: '60 Days',
    },
    {
        value: 90,
        label: '90 Days',
    },
]

const FormSliderField = ({ _default = 90 }) => {
    const [sliderValue, setSliderValue] = useState(_default)

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue)
    }

    const handleInputChange = (event) => {
        let val = event.target.value

        setSliderValue(val === '' ? '' : Number(val))
    }

    const handleInputBlur = () => {
        if (sliderValue < 0) setSliderValue(0)
    }

    return (
            <Grid item xs={12}>
                <Typography>Placeholder</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs sx={{ marginLeft: '1.5rem' }}>
                        <Slider
                            step={1}
                            marks={marks}
                            defaultValue={_default}
                            value={typeof sliderValue === 'number' ? sliderValue : 0}
                            valueLabelDisplay="auto"
                            onChange={handleSliderChange}
                            getAriaValueText={(value) => `${value} Days`}/>
                    </Grid>
                    <Grid item>
                        <Input
                            sx={{ width: '4.5rem' }}
                            inputProps={{ min: 0, type: 'number'}}
                            value={sliderValue}
                            endAdornment="Days"
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}/>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default FormSliderField
