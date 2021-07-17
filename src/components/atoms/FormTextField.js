import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

const FormTextField = ({key, id, name, type, text, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const value = data[section][name] ? data[section][name].value : '';

    const fieldProps = {
        key: key,
        id: id,
        name: name,
        type: type,
        label: text,
        required: required,
        defaultValue: value,
        variant: 'outlined',
        fullWidth: true
    }

    const handleChange = (event) => {
        setData({
            ...data,
            [section]: {
                fields: [
                    {
                        id: id,
                        label: text,
                        value: event.target.value
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
