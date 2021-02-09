import React, {Fragment} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {FormControl, FormLabel, Grid} from "@material-ui/core";
import {FormContext} from "../../contexts/form-context";

export default function FormCheckbox(props) {
    const checkboxProps = idx => ({
        id: `${props.id}-opt-${idx}`,
        name: `${props.name}Opt${idx}`,
        checked: props.checkedState[`${props.name}Opt${idx}`],
        color: 'primary'
    })

    const generateCheckboxes = () => {
        return (
            <Fragment>
                {props.options[props.option].map((value, idx) => (
                    <Grid key={`${props.id}-opt-${idx}`} sm={4} item>
                        <FormControlLabel control={
                            <FormContext.Consumer>
                                {({data, update}) => (
                                    <Checkbox {...checkboxProps(idx)}
                                              onChange={(event, checked) => {
                                                  props.handleCheckChange(event)
                                                  update({
                                                      ...data,
                                                      [event.target.name]: {
                                                          id: event.target.id,
                                                          value: checked,
                                                          label: value
                                                      }
                                                  })
                                              }}/>
                                )}
                            </FormContext.Consumer>
                        }
                                          label={value}/>
                    </Grid>
                ))}
            </Fragment>
        )
    }

    return (
        <Grid item sm={props.size === 'half' ? 6 : 12}>
            {/* TODO: Add context consumer */}
            <FormControl component={"fieldset"} fullWidth>
                <FormLabel>{props.text}</FormLabel>
                <FormGroup row>
                    <Grid spacing={0} container>
                        {generateCheckboxes()}
                    </Grid>
                </FormGroup>
            </FormControl>
        </Grid>
    )
}
