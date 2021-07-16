import React from "react";
import {FormControlLabel, Switch} from "@material-ui/core";

const FormSliderSwitch = ({id, handleChange}) => {
    const switchProps = {
        id: id + '-unlimited-switch',
        name: name,
        color: 'primary',
        checked: checked,
    }

    return (
        <FormControlLabel control={
            <Switch {...switchProps} onChange={handleChange}/>
        } label='Unlimited'/>
    )
}

export default FormSliderSwitch
