import React, {Fragment} from "react";
import {Grid} from "@material-ui/core";

import FormHeading from "../molecules/FormHeading";
import FormFieldWrapper from "../organisms/FormFieldWrapper";
import {getCurrentSectionName, SectionNameContext} from "../../utils/app.utils";

const Section = ({data, active}) => {
    return (
        <SectionNameContext.Provider value={getCurrentSectionName(active)}>
            <Grid container spacing={3}>
                {data['subsections'].map((subsection) => (<Fragment key={`${subsection.id}-wrapper`}>
                    <FormHeading key={`${subsection.id}-subsection`} {...subsection}/>
                    {subsection['fields'].map((field) => (
                        <FormFieldWrapper key={`${field.id}-field-wrapper`} {...field}/>
                    ))}
                </Fragment>))}
            </Grid>
        </SectionNameContext.Provider>
    )
}

export default Section
