import React, {Fragment} from "react";
import {Grid} from "@material-ui/core";

import FormHeading from "../molecules/FormHeading";
import FormFieldWrapper from "../organisms/FormFieldWrapper";

const Section = ({subsections}) => {
    return (
        <Grid container spacing={3}>
            {subsections.map((subsection) => (<Fragment key={`${subsection.id}-wrapper`}>
                <FormHeading key={`${subsection.id}-subsection`} {...subsection}/>
                {subsection['fields'].map((field) => (
                    <FormFieldWrapper key={`${field.id}-field-wrapper`} {...field}/>
                ))}
            </Fragment>))}
        </Grid>
    )
}

export default Section
