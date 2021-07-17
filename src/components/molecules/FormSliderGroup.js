import React, {useContext, useState} from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import FormSliderSwitch from "../atoms/FormSliderSwitch";
import FormSliderInput from "../atoms/FormSliderInput";
import FormSlider from "../atoms/FormSlider";
import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

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

const FormSliderGroup = ({text}) => {
    const classes = styles()

    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)
    const [value, setValue] = useState(90)
    const [checked, setChecked] = useState(false)

    const handleDataChange = (target) => {
        setData({
            ...data,
            [section]: {
                fields: [{
                    id: target.id,
                    label: text,
                    value: value
                }]
            }
        })
    }

    const handleSliderChange = ({target}, value) => {
        setValue(value)
        handleDataChange(target)
    }

    const handleInputChange = ({target}) => {
        setValue(target.value === '' ? '' : Number(target.value))
        handleDataChange(target)
    }

    const handleSwitchChange = ({target}, checked) => {
        setChecked(checked)
        handleDataChange(target)
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
