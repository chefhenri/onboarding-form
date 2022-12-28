import React, {useContext, useState} from "react";
import {Checkbox, FormControlLabel, Grid} from "@mui/material";

import {SectionDataContext, SectionNameContext} from "../../../utils/app.utils";
import {getOptId, getOptName} from "../../../utils/form.utils";

const FormCheckbox = ({id, idx, name, option, required}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const [checked, setChecked] = useState(data[section][name].value[getOptName(name, idx)].checked || false)

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
            [section]: {
                ...data[section],
                [name]: {
                    ...data[section][name],
                    value: {
                        ...data[section][name].value,
                        [getOptName(name, idx)]: {
                            text: option,
                            checked: checked
                        }
                    }
                }
            }
        })
    }

    return (
        <Grid sm={4} item>
            <FormControlLabel label={option} control={
                <Checkbox {...checkboxProps(idx)} checked={checked} onChange={handleChange}/>
            }/>
        </Grid>
    )
}

export default FormCheckbox
