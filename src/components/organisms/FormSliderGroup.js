import React, {useContext, useState} from "react";
import {Container, Grid, Typography} from "@material-ui/core";

import FormSliderSwitch from "../molecules/FormSliderSwitch";
import FormSliderInput from "../molecules/FormSliderInput";
import FormSlider from "../molecules/FormSlider";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";
import {styles} from "../../styles/form.styles";

const FormSliderGroup = ({id, text}) => {
    const classes = styles()

    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)
    const [value, setValue] = useState(90)
    const [checked, setChecked] = useState(false)

    // FIXME: Deep merge data with context
    const handleDataChange = () => {
        setData({
            ...data,
            [section]: [
                {
                    id: id,
                    value: value
                }
            ]
        })
    }

    const handleSliderChange = ({target}, value) => {
        setValue(value)
        handleDataChange()
    }

    const handleInputChange = ({target}) => {
        setValue(target.value === '' ? '' : Number(target.value))
        handleDataChange()
    }

    const handleSwitchChange = ({target}, checked) => {
        setChecked(checked)
        handleDataChange()
    }

    return (
        <Grid sm={12} item>
            <Typography>{text}</Typography>
            <Container className={classes.container} component={"div"} maxWidth={"lg"}>
                <Grid spacing={2} alignItems={"center"} container>
                    <FormSlider className={classes.slider} handleChange={handleSliderChange}/>
                    <FormSliderInput disabled={checked} className={classes.input} handleChange={handleInputChange}/>
                </Grid>
                <FormSliderSwitch handleChange={handleSwitchChange}/>
            </Container>
        </Grid>
    )
}

export default FormSliderGroup