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

    const marks = props.options[props.opt]

    const valueText = (value) => {
        return `${value} Days`
    }

    const labelFormat = (value) => {
        return value
    }

    // TODO: Add text field to slider for 'Custom' value
    return (
        <Grid sm={12} item>
            <Typography>{props.text}</Typography>
            <Container className={classes.container} component={"div"} maxWidth={"lg"}>
                <Grid spacing={2} alignItems={"center"} container>
                    <Grid item sm>
                        <Slider className={classes.slider} defaultValue={90} value={typeof value === 'number' ? value : 0} marks={marks} step={1} min={0}
                                valueLabelFormat={labelFormat} getAriaValueText={valueText} valueLabelDisplay={"auto"}
                                onChange={handleSliderChange} disabled={checked}/>
                    </Grid>
                    <Grid item>
                        <Input className={classes.input} value={value} margin={"dense"} onChange={handleInputChange}
                               inputProps={{
                                   step: 1,
                                   min: 0,
                                   max: 500,
                                   type: 'number'
                               }} disabled={checked}/>
                    </Grid>
                </Grid>
                <FormControlLabel control={
                    <Switch name='retentionSliderUnlimitedCheck' color={"primary"} checked={checked}
                            onChange={handleChecked}/>
                } label='Unlimited'/>
            </Container>
        </Grid>
    )
}
