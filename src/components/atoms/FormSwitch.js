import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {Grid} from "@material-ui/core";
import {SectionContext} from "../../contexts/section-context";

// TODO: Refactor context consumption
export default function FormSwitch(props) {
    const switchProps = {
        id: props.id,
        name: props.name,
        color: 'primary'
    }

    return (
        <Grid item sm={6}>
            <FormControlLabel control={
                <SectionContext.Consumer>
                    {({data, update}) => (
                        <Switch {...switchProps} checked={data[switchProps.name] ? data[switchProps.name].value : false}
                                onChange={(event, checked) => {
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
