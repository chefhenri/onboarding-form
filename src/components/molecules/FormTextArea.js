import React, {useContext, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

const FormTextArea = ({id, name, text, type, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const [value, setValue] = useState(data[section][name].value)

    const fieldProps = {
        id: id,
        name: name,
        type: type,
        label: text,
        required: required,
        variant: 'outlined',
        rows: 5,
        rowsMax: 10,
        fullWidth: true,
        multiline: true
    }

    const handleChange = ({target}) => {
        setValue(target.value)

        setData({
            ...data,
            [section]: {
                ...data[section],
                [name]: {
                    ...data[section][name],
                    value: target.value
                }
            }
        })
    }

    return (
        <Grid item sm={12}>
            <TextField {...fieldProps} defaultValue={value} onChange={handleChange}/>
        </Grid>
    )
}

export default FormTextArea
