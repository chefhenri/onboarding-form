import React, {useContext, useState} from "react";

import {Grid, Typography} from "@mui/material";

import {DateTime as DT} from 'luxon'

import {SectionDataContext, SectionNameContext} from "../../../utils/app.utils";
import {DATE_PICKER_FMT, MIN_DATE_MSG} from "../../../utils/form.utils";
import {DatePicker} from "@mui/x-date-pickers";

const FormDatePicker = ({id, name, text, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const [date, setDate] = useState(data[section][name].value || null)

    const handleChange = (date) => {
        setDate(date)

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
            <DatePicker
                autoOk
                fullWidth
                id={id}
                name={name}
                label={text}
                required={required}
                value={date}
                placeholder={DT.local().plus({days: 14}).toLocaleString()}
                format={DATE_PICKER_FMT}
                minDate={DT.local()}
                variant='inline'
                inputVariant='outlined'
                minDateMessage={MIN_DATE_MSG}
                InputAdornmentProps={{position: 'start'}}
                onChange={handleChange} renderInput={<p/>}/>
        </Grid>
    )
}

export default FormDatePicker
