import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FormControlLabel, Grid, Switch } from "@mui/material";

import { update } from '../../../../slice.js'

const FormSwitch = ({ id, name, label, _default }) => {
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
            <FormControlLabel
                control={
                    <Switch
                        {...{
                            id,
                            name
                        }}
                        checked={checked === undefined ? _default : checked}
                        onChange={handleChange} />
                }
                label={label} />
        </Grid>
    )
}

export default FormSwitch
