import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {FormControl, FormLabel, Grid} from "@material-ui/core";

export default function FormCheckbox(props) {
    return (
        <Grid item sm={props.size === 'half' ? 6 : 12}>
            <FormControl component={"fieldset"} fullWidth>
                <FormLabel>{props.text}</FormLabel>
                <FormGroup row>
                    <Grid spacing={0} container>
                        {props.options[props.option].map((value, idx) => (
                            <Grid key={`${props.id}-opt-${idx}`} sm={4} item>
                                <FormControlLabel control={
                                    <Checkbox id={`${props.id}-opt-${idx}`}
                                              name={`${props.name}Opt${idx}`}
                                              checked={props.checkedState[`${props.name}Opt${idx}`]}
                                              onChange={props.handleCheckChange}
                                              color={"primary"}/>
                                }
                                                  label={value}/>
                            </Grid>
                        ))}
                    </Grid>
                </FormGroup>
            </FormControl>
        </Grid>
    )
}
