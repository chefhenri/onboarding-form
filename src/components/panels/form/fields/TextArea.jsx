import { useDispatch, useSelector } from 'react-redux'
import { Grid, TextField } from "@mui/material";

import { update } from '../../../../slice'

const FormTextArea = ({ id, name, label, required }) => {
    const value = useSelector((state) => state.form[name])
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(update({ name, label, value: event.target.value }))
    }

    return (
        <Grid item xs={12}>
            <TextField
                {...{
                    id,
                    name,
                    label,
                    required
                }}
                rows={5}
                fullWidth
                multiline
                variant="filled"
                value={value || ''}
                onChange={event => handleChange(event)} />
        </Grid>
    )
}

export default FormTextArea
