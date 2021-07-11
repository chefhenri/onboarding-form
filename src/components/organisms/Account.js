import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import FormHeading from "../atoms/FormHeading";
import FormField from "../atoms/FormField";



export default function Account({id, subsections}) {
    return (
        <Fragment>
            <Grid container spacing={3}>
                {subsections.map(subsection => (
                    <Fragment key={`${subsection.id}-frag`}>
                        <FormHeading key={`${subsection.id}-heading`} {...subsection}/>
                        {subsection.fields.map((field, idx) => (
                            <FormField key={`${id}-field-${idx}`} {...field}/>
                        ))}
                    </Fragment>
                ))}
            </Grid>
        </Fragment>
    );
}
