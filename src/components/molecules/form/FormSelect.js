import React, {useContext, useState} from "react";

import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";

import {SectionDataContext, SectionNameContext} from "../../../utils/app.utils";
import {styles} from "../../../styles/form.styles";

const FormSelect = ({id, name, text, required, options}) => {
    const classes = styles()

    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const [selected, setSelected] = useState(data[section][name].value || 2)

    const selectConfig = {
        labelId: text
            .toLowerCase()
            .replace(' ', '-'),
        displayEmpty: true,
        autoWidth: false
    }

    const handleChange = ({target}) => {
        setSelected(target.value)

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
        <Grid item sm={6}>
            <FormControl className={classes.formControl} variant={"outlined"} required={required} fullWidth>
                <InputLabel id={selectConfig.labelId}>{text}</InputLabel>
                <Select
                    {...selectConfig}
                    id={id}
                    name={name}
                    label={text}
                    value={selected}
                    onChange={handleChange}>
                    {options.map((value, idx) => (
                        <MenuItem key={`${value}-opt`} value={idx}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default FormSelect
