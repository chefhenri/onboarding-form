import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {Grid} from "@material-ui/core";
import {FormContext} from "../../contexts/form-context";

export default function FormSwitch(props) {
    const switchProps = {
        id: props.id,
        name: props.name,
        checked: props.checkedState[props.name],
        color: 'primary'
    }

    return (
        <Grid item sm={6}>
            <FormControlLabel control={
                <FormContext.Consumer>
                    {({data, update}) => (
                        <Switch {...switchProps} onChange={(event, checked) => {
                            props.handleChange(event, checked)
                            update({
                                ...data,
                                [props.name]: {id: props.id, value: checked, label: props.text}
                            })
                        }}/>
                    )}
                </FormContext.Consumer>
            } label={props.text}/>
        </Grid>
    )
}
