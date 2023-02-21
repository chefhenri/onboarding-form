import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox, FormControlLabel, Grid } from "@mui/material"

import { update } from '../../../../slice.js'

const FormCheckbox = ({ name, label, _default = false }) => {
    const checked = useSelector((state) => state.form[name])
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(update({ name, value: !checked }))
    }

    // Init store record
    useEffect(() => {
        checked === undefined
            && dispatch(update({ name, value: _default }))
    }, [])

    return (
        <Grid item xs={6}>
            <FormControlLabel control={
                <Checkbox {...{
                    name
                }}
                    checked={ checked === undefined ? _default : checked }
                    onChange={handleChange} />
            } label={label} />
        </Grid>
    )
}

export default FormCheckbox
