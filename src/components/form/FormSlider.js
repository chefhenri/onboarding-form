import React from "react";
import {Container, FormControlLabel, Grid, Input, Slider, Switch, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
    },
    slider: {
        marginRight: theme.spacing(2)
    },
    input: {
        width: '3rem',
        marginRight: '1rem'
    }
}))

export default function FormSlider(props) {
    const classes = styles()

    const [value, setValue] = React.useState(90)
    const [checked, setChecked] = React.useState(false)

    const handleSliderChange = (event, value) => {
        setValue(value)
    }

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value))
    }

    const handleChecked = (event) => {
        setChecked(event.target.checked)
    }

    const marks = props.options[props.option]

    const valueText = (value) => {
        return `${value} Days`
    }

    const labelFormat = (value) => {
        return value
    }

    const sliderProps = {
        id: props.id,
        name: props.name,
        className: classes.slider,
        defaultValue: 90,
        value: typeof value === 'number' ? value : 0,
        marks: marks,
        step: 1,
        min: 0,
        valueLabelDisplay: 'auto',
        disabled: checked,
        valueLabelFormat: labelFormat,
        getAriaValueText: valueText,
        onChange: handleSliderChange,
    }

    const switchProps = {
        id: props.id + '-unlimited-switch',
        name: props.name,
        color: 'primary',
        checked: checked,
        onChange: handleChecked
    }

    const inputProps = {
        id: props.id + '-custom-value',
        name: props.name,
        className: classes.input,
        value: value,
        margin: 'dense',
        inputProps: {
            step: 1,
            min: 0,
            max: 500,
            type: 'number'
        },
        disabled: checked,
        onChange: handleInputChange,
    }

    return (
        <Grid sm={12} item>
            {/* TODO: Add context consumer */}
            <Typography>{props.text}</Typography>
            <Container className={classes.container} component={"div"} maxWidth={"lg"}>
                <Grid spacing={2} alignItems={"center"} container>
                    <Grid item sm>
                        <Slider {...sliderProps}/>
                    </Grid>
                    <Grid item>
                        <Input {...inputProps}/>
                    </Grid>
                </Grid>
                <FormControlLabel control={<Switch {...switchProps}/>} label='Unlimited'/>
            </Container>
        </Grid>
    )
}
