import React, {Fragment} from 'react';
import FormField from "../atoms/FormField";
import {Grid} from "@material-ui/core";

import FormHeading from "../atoms/FormHeading";

export default function Configuration(props) {
    return (
        <Fragment>
            <Grid container spacing={3}>
                {props.subsections.map(subsection => (
                    <Fragment key={`${subsection.id}-frag`}>
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
