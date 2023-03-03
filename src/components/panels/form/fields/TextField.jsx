import { useDispatch, useSelector } from 'react-redux'
import { Grid, TextField } from "@mui/material";

import { update } from '../../../../slice.js'

// TODO: Add input masking (where applicable)
const FormTextField = ({ id, name, type, label, required }) => {
    const value = useSelector((state) => state.form[name])
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(update({ name, value: event.target.value }))
    }

    return (
        <Grid item xs={6}>
            <TextField
                {...{
                    id,
                    name,
                    type,
                    label,
                    required
                }}
                fullWidth
                variant="filled"
                value={value || ''}
                onChange={event => handleChange(event)} />
        </Grid>
    )
}

export default FormTextField