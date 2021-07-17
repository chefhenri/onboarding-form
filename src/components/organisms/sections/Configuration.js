import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";

import FormHeading from "../../atoms/FormHeading";
import FormFieldBase from "../../molecules/FormFieldBase";
import {SectionNameContext} from "../../../utils/app.utils";

export default function Configuration({id, subsections}) {
    return (
        <SectionNameContext.Provider value={'config'}>
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
        </SectionNameContext.Provider>
    );
}
