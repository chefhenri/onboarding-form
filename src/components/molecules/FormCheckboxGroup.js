import React from "react";
import {FormControl, FormLabel, Grid} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";

import FormCheckbox from "../atoms/FormCheckbox";

const FormCheckboxGroup = ({key, size, id, name, text, options, required}) => {
    const generateOptions = () => (
        <>
            {options.map((option, idx) => (
                <FormCheckbox id={id} idx={idx} name={name} text={option} required={required}/>
            ))}
        </>
    )

    return (
        <Grid key={key} sm={size === 'half' ? 6 : 12} item>
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
