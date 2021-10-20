import React, {useContext} from "react";
import {DatePicker} from "@material-ui/pickers";
import {Grid} from "@material-ui/core";
import {DateTime as DT} from "luxon";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

const FormDatePicker = ({id, name, text, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

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

    // FIXME: Assuming wrong pattern from context
    const getValue = () => {
        let datePicker = data[section].fields.filter(field => field.id === id)

        return datePicker.value
    }

    // FIXME: Deep merge data with context
    const handleChange = ({target}, date) => {
        setData({
            ...data,
            [section]: [
                {
                    id: id,
                    value: date
                }
            ]
        })
    }

    return (
        <Grid item sm={6}>
            <DatePicker {...fieldProps} value={getValue} onChange={handleChange}/>
        </Grid>
    )
}

export default FormDatePicker
