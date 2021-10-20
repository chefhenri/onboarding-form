import React, {useContext, useState} from "react";
import {DatePicker} from "@material-ui/pickers";
import {Grid} from "@material-ui/core";
import {DateTime as DT} from "luxon";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

const FormDatePicker = ({id, name, text, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const [value, setValue] = useState(data[section][name].value || null)

    const fieldProps = {
        id: id,
        name: name,
        label: text,
        required: required,
        variant: 'inline',
        inputVariant: 'outlined',
        format: 'MM/dd/yyyy',
        minDate: DT.local(),
        minDateMessage: 'Date should not be before today',
        autoOk: true,
        disableToolbar: true,
        disablePast: true,
        fullWidth: true
    }

    const handleChange = ({target}, date) => {
        setValue(date)

        setData({
            ...data,
            [section]: {
                ...data[section],
                [name]: {
                    ...data[section][name],
                    value: date
                }
            }
        })
    }

    return (
        <Grid item sm={6}>
            {/* FIXME: Implement DatePicker component from new package version */}
            <DatePicker {...fieldProps} value={value} onChange={handleChange}/>
        </Grid>
    )
}

export default FormDatePicker
