import { useDispatch, useSelector } from 'react-redux'
import { Grid, TextField } from "@mui/material";

import { update } from '../../../../slice.js'

const FormTextField = ({ id, name, type, label, required }) => {
    const value = useSelector((state) => state.form[name])
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(update({ name, label, value: event.target.value }))
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