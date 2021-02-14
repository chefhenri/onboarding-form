import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {Grid} from "@material-ui/core";
import {SectionContext} from "../../contexts/section-context";

export default function FormSwitch(props) {
    const switchProps = {
        id: props.id,
        name: props.name,
        checked: props.checkedState[props.name],
        color: 'primary'
    }

    return (
        // TODO: Refactor to reflect template changes
        <Grid item sm={6}>
            <FormControlLabel control={
                <SectionContext.Consumer>
                    {({data, update}) => (
                        <Switch {...switchProps} onChange={(event, checked) => {
                            props.handleChange(event, checked)
                            update({
                                ...data,
                                [props.name]: {id: props.id, value: checked, label: props.text}
                            })
                        }}/>
                    )}
                </SectionContext.Consumer>
            } label={props.text}/>
        </Grid>
    )
}
