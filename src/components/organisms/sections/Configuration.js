import React, {Fragment} from 'react';
import FormFieldBase from "../../atoms/FormFieldBase";
import {Grid} from "@material-ui/core";

import FormHeading from "../../atoms/FormHeading";
import {SectionContext} from "../../../utils/app.utils";

// TODO: Refactor 'SectionContext' provider
export default function Configuration({id, subsections}) {
    return (
        <SectionContext.Provider value={'config'}>
            <Grid container spacing={3}>
                {subsections.map(subsection => (
                    <Fragment key={`${subsection.id}-frag`}>
                        <FormHeading key={`${subsection.id}-heading`} {...subsection}/>
                        {subsection.fields.map((field, idx) => (
                            <FormFieldBase key={`${id}-field-${idx}`} {...field}/>
                        ))}
                    </Fragment>
                ))}
            </Grid>
        </SectionContext.Provider>
    );
}
