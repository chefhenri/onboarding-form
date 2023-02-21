import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux'
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

import { update } from '../../../../slice.js'

const FormSelect = ({ id, name, label, options, required }) => {    
    const dispatch = useDispatch()
    const value = useSelector((state) => state.form[name])
    
    const labelId = _.kebabCase([label, 'label'])

    const handleChange = (event) => {
        dispatch(update({ name, value: event.target.value }))
    }

    return (
        <Grid item xs={6}>
            <FormControl fullWidth variant="filled">
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select {...{
                    id,
                    name,
                    label,
                    value,
                    labelId,
                    required,
                }}
                    displayEmpty
                    onChange={handleChange}>
                    {options.map(({ label, value }, idx) => (
                        <MenuItem key={_.kebabCase([name, 'opt', idx])} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default FormSelect
