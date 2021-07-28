import React from "react";
import FormFieldGroup from "../molecules/FormFieldGroup";
import {Grid} from "@material-ui/core";

const Section = ({id, subsections}) => {
    return (
        <Grid container spacing={3}>
            {subsections.map((subsection, idx) => (
                <FormFieldGroup key={`${id}-field-group-${idx}`} id={id} subsection={subsection}/>
            ))}
        </Grid>
    )
}

export default Section
