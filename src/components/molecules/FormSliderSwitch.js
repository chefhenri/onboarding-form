import React from "react";
import {FormControlLabel, Switch} from "@material-ui/core";

const FormSliderSwitch = ({id, name, checked, handleChange}) => {
    const switchProps = {
        color: 'primary',
        checked: checked,
    }

    return (
        <FormControlLabel control={
            <Switch id={id} name={name} {...switchProps} onChange={handleChange}/>
        } label='Unlimited'/>
    )
}

export default FormSliderSwitch
