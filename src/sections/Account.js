import React, {Fragment} from 'react';
import FormField from "../components/form/FormField";
import {Grid} from "@material-ui/core";

export default function Account(props) {
    return (
        <Fragment>
            <Grid container spacing={3}>
                {props.fields.map((data, idx) => (
                    <FormField key={`AccountField${idx}`} {...data}/>
                ))}
            </Grid>
        </Fragment>
    );
}
