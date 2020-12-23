import React, {Fragment} from 'react';
import FormField from "../components/form/FormField";
import {Grid} from "@material-ui/core";

import moment from "moment/moment";

export default function Information(props) {
    const [selectedDate, setSelectedDate] = React.useState({
        installDatePicker: moment().day(15),
        removalDatePicker: moment().day(29)
    })
    const [checkedState, setCheckedState] = React.useState({
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

    const handleDateChange = (date, name) => {
        setSelectedDate({...selectedDate, [name]: date})
    }
    const handleCheckedChange = (event) => {
        setCheckedState({...checkedState, [event.target.name]: event.target.checked})
    }

    return (
        <Fragment>
            <Grid container spacing={3}>
                {props.fields.map((data, idx) => (
                    <FormField {...data}
                               key={`InformationField${idx}`}
                               options={props.options}
                               selectedDate={selectedDate}
                               handleDateChange={handleDateChange}
                               checkedState={checkedState}
                               handleCheckChange={handleCheckedChange}/>
                ))}
            </Grid>
        </Fragment>
    );
}
