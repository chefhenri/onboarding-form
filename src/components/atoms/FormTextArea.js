import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

export default function FormTextArea({id, name, text, type, required}) {
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

    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const handleChange = ({target}) => {
        setData({
            ...data,
            [section]: [
                {
                    id: id,
                    value: target.value
                }
            ]
        })
    }

    return (
        <Grid item sm={12}>
            <TextField {...fieldProps} onChange={handleChange}/>
        </Grid>
    )
}
