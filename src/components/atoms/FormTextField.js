import React, {useContext, useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

// FIXME: TextField not displaying value after re-mounting
const FormTextField = ({id, name, type, text, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)
    // const [value, setValue] = useState('')

    // useEffect(() => {
    //     console.log(data[section])
    //     let textField = data[section].fields.filter(field => field.id === id)
    //
    //     setValue(textField.value)
    // }, [])

    const fieldProps = {
        id: id,
        name: name,
        type: type,
        label: text,
        required: required,
        variant: 'outlined',
        fullWidth: true
    }

    const handleChange = ({target}) => {
        // setValue(target.value)
        setData({
            ...data,
            [section]: {
                fields: [
                    {
                        id: id,
                        label: text,
                        value: target.value
                    }
                ]
            }
        })
    }

    return (
        <Grid item sm={6}>
            <TextField {...fieldProps} onChange={handleChange}/>
        </Grid>
    )
}

export default FormTextField
