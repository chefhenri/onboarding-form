import _ from 'lodash';
import { useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

const FormSelect = ({ id, name, label, options, required }) => {
    const [value, setValue] = useState('')
    const labelId = _.kebabCase([label, 'label'])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    // TODO: Add 'key' attr to menu items
    return (
        <Grid item xs={6}>
            <FormControl fullWidth variant="filled">
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select {...{ id, name, label, value, required, labelId }} displayEmpty onChange={handleChange}>
                    {options.map(({label, value}) => (
                        <MenuItem value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default FormSelect
