import React, {Fragment, useState} from 'react'
import FormField from "../components/form/FormField";
import {Grid} from "@material-ui/core";

export default function Reseller(props) {
    const [checkedState, setCheckedState] = useState({
        ticketNotifSwitch: true,
        resupplyNotifSwitch: true
    })

    const handleChange = (event, checked) => {
        setCheckedState({...checkedState, [event.target.name]: checked})
    }

    return (
        <Fragment>
            <Grid container spacing={3}>
                {props.fields.map((data, idx) => (
                    <FormField {...data}
                               key={`ResellerField${idx}`}
                               checkedState={checkedState}
                               handleChange={handleChange}/>
                ))}
            </Grid>
        </Fragment>
    );
}
