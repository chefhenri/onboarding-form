import React, {Fragment, useState} from 'react'
import FormField from "../components/form/FormField";
import {Grid} from "@material-ui/core";
import FormHeading from "../components/form/FormHeading";

export default function Reseller(props) {
    const [checked, setChecked] = useState({
        ticketNotifSwitch: true,
        resupplyNotifSwitch: true
    })

    const handleChange = (event, value) => {
        setChecked({...checked, [event.target.name]: value})
    }

    return (
        <Fragment>
            <Grid container spacing={3}>
                {props.subsections.map(subsection => (
                    <Fragment>
                        <FormHeading key={`${subsection.id}-heading`} {...subsection}/>
                        {subsection.fields.map((field, idx) => (
                            <FormField key={`${props.id}-field-${idx}`}
                                       isChecked={checked}
                                       handleChange={handleChange}
                                       {...field}/>
                        ))}
                    </Fragment>
                ))}
            </Grid>
        </Fragment>
    );
}
