import React from "react";

import {FormControl, FormGroup, FormLabel, Grid} from "@mui/material";

import FormCheckbox from "../../molecules//form/FormCheckbox";

import {getOptName} from "../../../utils/form.utils";

const FormCheckboxGroup = ({id, name, text, required, options, size}) => {
    const generateOptions = () => (
        <>
            {options.map((option, idx) => (
                <FormCheckbox key={getOptName(name, idx)} {...{id, idx, name, option, required}}/>
            ))}
        </>
    )

    return (
        <Grid sm={size === 'half' ? 6 : 12} item>
            <FormControl component={"fieldset"} fullWidth>
                <FormLabel>{text}</FormLabel>
                <FormGroup row>
                    <Grid spacing={0} container>
                        {generateOptions()}
                    </Grid>
                </FormGroup>
            </FormControl>
        </Grid>
    )
}

export default FormCheckboxGroup
