import React, {useContext, useState} from "react";

import {Container, Grid, Typography} from "@mui/material";

import FormSliderSwitch from "../../molecules/form/FormSliderSwitch";
import FormSliderInput from "../../molecules/form/FormSliderInput";
import FormSlider from "../../molecules/form/FormSlider";

import {SLIDER_DEFAULT_VAL, SLIDER_MAX_VAL, SLIDER_MIN_VAL, SLIDER_UNLIMITED_VAL} from "../../../utils/form.utils";
import {SectionDataContext, SectionNameContext} from "../../../utils/app.utils";

import {styles} from "../../../styles/form.styles";

const FormSliderGroup = ({id, name, text, options}) => {
    const classes = styles()

    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const [value, setValue] = useState(data[section][name].value || SLIDER_DEFAULT_VAL)
    const [checked, setChecked] = useState(false)

    const handleDataChange = (value) => {
        setData({
            ...data,
            [section]: {
                ...data[section],
                [name]: {
                    ...data[section][name],
                    value: value
                }
            }
        })
    }

    const handleSliderChange = ({target}, value) => {
        setValue(value)
        handleDataChange(value)
    }

    const handleInputChange = ({target}) => {
        setValue(target.value === '' ? '' : Number(target.value))
        handleDataChange(target.value)
    }

    const handleSwitchChange = ({target}, checked) => {
        setChecked(checked)
        setValue(SLIDER_DEFAULT_VAL)
        if (checked) handleDataChange(SLIDER_UNLIMITED_VAL)
        else handleDataChange(SLIDER_DEFAULT_VAL)
    }

    const handleBlur = () => {
        if (value < SLIDER_MIN_VAL) setValue(SLIDER_MIN_VAL)
        if (value > SLIDER_MAX_VAL) setValue(SLIDER_MAX_VAL)
    }

    return (
        <Grid sm={12} item>
            <Typography>{text}</Typography>
            <Container className={classes.container} component={"div"} maxWidth={"lg"}>
                <Grid spacing={2} alignItems={"center"} container>
                    <FormSlider
                        id={`${id}-slider`}
                        name={`${name}Slider`}
                        value={value}
                        markOpts={options}
                        isDisabled={checked}
                        handleChange={handleSliderChange}/>
                    <FormSliderInput
                        id={`${id}-input`}
                        name={`${name}Input`}
                        value={value}
                        isDisabled={checked}
                        handleBlur={handleBlur}
                        handleChange={handleInputChange}/>
                </Grid>
                <FormSliderSwitch
                    id={`${id}-switch`}
                    name={`${name}Switch`}
                    checked={checked}
                    handleChange={handleSwitchChange}/>
            </Container>
        </Grid>
    )
}

export default FormSliderGroup
