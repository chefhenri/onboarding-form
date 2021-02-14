import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import FormHeading from "../components/form/FormHeading";
import FormField from "../components/form/FormField";

export default function Account(props) {
    return (
        <Fragment>
            <Grid container spacing={3}>
                {props.subsections.map(subsection => (
                    <Fragment>
                        <FormHeading key={`${subsection.id}-heading`} {...subsection}/>
                        {subsection.fields.map((field, idx) => (
                            <FormField key={`${props.id}-field-${idx}`} {...field}/>
                        ))}
                    </Fragment>
                ))}
            </Grid>
        </Fragment>
    );
}
