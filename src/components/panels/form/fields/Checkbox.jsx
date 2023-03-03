import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../../../slice.js'
import { Checkbox, FormControlLabel, Grid } from "@mui/material"


const FormCheckbox = ({ name, label, _default = false }) => {
    const checked = useSelector((state) => state.form[name])
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(update({
            name, label, value: !checked
        }))
    }

    // Init store record
    useEffect(() => {
        checked === undefined
            && dispatch(update({
                name, label, value: _default
            }))
    })

    return (
        <Grid item xs={6}>
            <FormControlLabel control={
                <Checkbox {...{
                    name
                }}
                    checked={checked === undefined ? _default : checked}
                    onChange={handleChange} />
            } label={label} />
        </Grid>
    )
}

export default FormCheckbox
