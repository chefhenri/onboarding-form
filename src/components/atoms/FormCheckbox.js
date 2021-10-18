import React, {useContext, useState} from "react";
import {Grid} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";
import {getOptId, getOptName} from "../../utils/form.utils";

// TODO: Convert 'checked' status to local state
// TODO: Load previous state from context (ref. FormTextField)
const FormCheckbox = ({id, idx, name, text, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)
    const [checked, setChecked] = useState(
        data[section].filter(field => field.id === getOptId(id, idx)).checked || false
    )

    // const getId = (idx) => {
    //     return `${id}-opt-${idx}`
    // }
    //
    // const getName = (idx) => {
    //     return `${name}Opt${idx}`
    // }

    const checkboxProps = (idx) => {
        return {
            id: getOptId(id, idx),
            name: getOptName(name, idx),
            required: required,
            color: 'primary'
        }
    }

    const handleChange = ({target}, checked) => {
        setChecked(checked)
        setData({
            ...data,
            [section]: [
                {
                    id: id,
                    value: checked
                }
            ]
        })
    }

    return (
        <Grid key={'key'} sm={4} item>
            <FormControlLabel label={text} control={
                <Checkbox {...checkboxProps(idx)} checked={checked} onChange={handleChange}/>
            }/>
        </Grid>
    )
}

export default FormCheckbox
