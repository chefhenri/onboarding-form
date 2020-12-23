import React, {Fragment} from 'react';
import FormField from "../components/form/FormField";
import {Grid} from "@material-ui/core";

import moment from "moment/moment";

export default function Configuration(props) {
    const [selectedDate, setSelectedDate] = React.useState({
        activationDatePicker: moment().day(15)
    })
    const [selectedItem, setSelectedItem] = React.useState({
        cloudHostingSelect: '',
        retentionPolicySelect: ''
    })
    const [checkedState, setCheckedState] = React.useState({
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

    const handleDateChange = (date, name) => {
        setSelectedDate({...selectedDate, [name]: date})
    }

    const handleItemChange = (event) => {
        setSelectedItem({...selectedItem, [event.target.name]: event.target.value})
    }
    const handleCheckedChange = (event) => {
        setCheckedState({...checkedState, [event.target.name]: event.target.checked})
    }

    return (
        <Fragment>
            <Grid container spacing={3}>
                {props.fields.map((data, idx) => (
                    <FormField {...data}
                               key={`ConfigurationField${idx}`}
                               options={props.options}
                               selectedDate={selectedDate}
                               handleDateChange={handleDateChange}
                               selectedItem={selectedItem[data.name]}
                               handleChange={handleItemChange}
                               checkedState={checkedState}
                               handleCheckChange={handleCheckedChange}/>
                ))}
            </Grid>
        </Fragment>
    );
}
