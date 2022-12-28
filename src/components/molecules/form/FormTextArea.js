import React, {useContext, useState} from "react";

import {SectionDataContext, SectionNameContext} from "../../../utils/app.utils";
import {Grid, TextField} from "@mui/material";

const FormTextArea = ({id, name, text, type, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const [value, setValue] = useState(data[section][name].value)

    const fieldConfig = {
        variant: 'outlined',
        minRows: 5,
        maxRows: 10,
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
            <TextField
                {...fieldConfig}
                id={id}
                name={name}
                type={type}
                label={text}
                required={required}
                defaultValue={value}
                onChange={handleChange}/>
        </Grid>
    )
}

export default FormTextArea
