import React from "react";
import {Grid} from "@material-ui/core";

import FormHeading from "../atoms/FormHeading";
import FormFieldWrapper from "../molecules/FormFieldWrapper";

const Section = ({subsections}) => {
    return (
        <Grid container spacing={3}>
            {subsections.map((subsection) => (<>
                <FormHeading key={`${subsection.id}-subsection`} {...subsection}/>
                {subsection['fields'].map((field) => (<FormFieldWrapper {...field}/>))}
            </>))}
        </Grid>
    )
}

export default Section
