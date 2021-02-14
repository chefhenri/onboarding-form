import React, {Fragment} from 'react';
import FormField from "../components/form/FormField";
import {Grid} from "@material-ui/core";

import moment from "moment/moment";
import FormHeading from "../components/form/FormHeading";

export default function Information(props) {
    const [date, setDate] = React.useState({
        installDatePicker: moment().day(15),
        removalDatePicker: moment().day(29)
    })
    const [checked, setChecked] = React.useState({
        installAppsBoxOpt0: false,
        installAppsBoxOpt1: false,
        installAppsBoxOpt2: false,
        installAppsBoxOpt3: false,
        installAppsBoxOpt4: false,
        installAppsBoxOpt5: false,
        installAppsBoxOpt6: false,
        installAppsBoxOpt7: false,
        integrationAppsBoxOpt0: false,
        integrationAppsBoxOpt1: false,
        integrationAppsBoxOpt2: false,
        integrationAppsBoxOpt3: false,
    })

    const handleDateChange = (value, name) => {
        setDate({...date, [name]: value})
    }
    const handleCheckedChange = (event) => {
        setChecked({...checked, [event.target.name]: event.target.checked})
    }

    return (
        <Fragment>
            <Grid container spacing={3}>
                {props.subsections.map(subsection => (
                    <Fragment>
                        <FormHeading key={`${subsection.id}-heading`} {...subsection}/>
                        {subsection.fields.map((field, idx) => (
                            <FormField key={`${props.id}-field-${idx}`}
                                       date={date}
                                       isChecked={checked}
                                       handleDateChange={handleDateChange}
                                       handleCheckedChange={handleCheckedChange}
                                       {...field}/>
                        ))}
                    </Fragment>
                ))}
            </Grid>
        </Fragment>
    );
}
