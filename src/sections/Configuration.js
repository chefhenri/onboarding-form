import React, {Fragment} from 'react';
import FormField from "../components/form/FormField";
import {Grid} from "@material-ui/core";

import FormHeading from "../components/form/FormHeading";
import {DateTime as DT} from "luxon";

export default function Configuration(props) {
    const [date, setDate] = React.useState({
        activationDatePicker: DT.local().plus({weeks: 1})
    })
    const [item, setItem] = React.useState({
        cloudHostingSelect: '',
        retentionPolicySelect: ''
    })
    const [checked, setChecked] = React.useState({
        enableSolutionsBoxOpt0: false,
        enableSolutionsBoxOpt1: false,
        dataTransmitBoxOpt0: false,
        dataTransmitBoxOpt1: false,
        dataTransmitBoxOpt2: false,
        dataTransmitBoxOpt3: false,
        dataTransmitBoxOpt4: false,
        dataTransmitBoxOpt5: false,
        dataTransmitBoxOpt6: false,
        dataTransmitBoxOpt7: false,
        dataTransmitBoxOpt8: false,
    })

    const handleDateChange = (name, value) => {
        setDate({...date, [name]: value})
    }

    const handleItemChange = (event) => {
        setItem({...item, [event.target.name]: event.target.value})
    }
    const handleCheckedChange = (event) => {
        setChecked({...checked, [event.target.name]: event.target.checked})
    }

    return (
        <Fragment>
            <Grid container spacing={3}>
                {props.subsections.map(subsection => (
                    <Fragment key={`${subsection.id}-frag`}>
                        <FormHeading key={`${subsection.id}-heading`} {...subsection}/>
                        {subsection.fields.map((field, idx) => (
                            <FormField key={`${props.id}-field-${idx}`}
                                       date={date}
                                       item={item}
                                       isChecked={checked}
                                       handleDateChange={handleDateChange}
                                       handleItemChange={handleItemChange}
                                       handleCheckedChange={handleCheckedChange}
                                       {...field}/>
                        ))}
                    </Fragment>
                ))}
            </Grid>
        </Fragment>
    );
}
