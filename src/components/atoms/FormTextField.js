import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

// FIXME: TextField not displaying value after re-mounting
const FormTextField = ({id, name, type, text, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const fieldProps = {
        id: id,
        name: name,
        type: type,
        label: text,
        required: required,
        variant: 'outlined',
        fullWidth: true
    }

    const getDefault = () => {
        let field = data[section].fields.filter(field => id === field.id)

        return field.value
    }

    const handleChange = ({target}) => {
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
