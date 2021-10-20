import React, {useContext} from "react";
import {FormControl, Grid, MenuItem} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";
import {styles} from "../../styles/form.styles";

const FormSelect = ({id, name, text, required, options}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const classes = styles()

    const selectProps = {
        id: id,
        name: name,
        label: text,
        labelId: text
            .toLowerCase()
            .replace(' ', '-'),
        displayEmpty: true,
        autoWidth: true
    }

    // FIXME: Assuming wrong pattern from context
    const getValue = () => {
        let select = data[section].fields.filter(field => field.id === id)

        return select.idx
    }

    // FIXME: Deep merge data with context
    const handleChange = ({target}) => {
        setData({
            ...data,
            [section]: [
                {
                    id: id,
                    value: options[target.value]
                }
            ]
        })
    }

    return (
        <Grid item sm={6}>
            <FormControl className={classes.formControl} variant={"outlined"} required={required} fullWidth>
                <InputLabel id={selectProps.labelId}>{text}</InputLabel>
                <Select {...selectProps} value={getValue} onChange={handleChange}>
                    {options.map((value, idx) => (
                        <MenuItem key={`${value}-opt`} value={idx}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default FormSelect
