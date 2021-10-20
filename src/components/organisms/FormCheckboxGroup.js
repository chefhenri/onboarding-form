import React from "react";
import {FormControl, FormLabel, Grid} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";

import FormCheckbox from "../molecules/FormCheckbox";

import {getOptName} from "../../utils/form.utils";

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
