import React, {useContext, useState} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {Grid} from "@material-ui/core";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

const FormSwitch = ({id, name, text, initial}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)
    const [checked, setChecked] = useState(initial)

    const switchProps = {
        id: id,
        name: name,
        color: 'primary'
    }

    // TODO: Refactor data update to match new pattern
    const handleChange = () => {
        setChecked(!checked)
        setData({
            ...data,
            [section]: {
                fields: [{
                    id: id,
                    label: text,
                    value: !checked
                }]
            }
        })
    }

    return (
        <Grid sm={6} item>
            <FormControlLabel label={text} control={
                <Switch {...switchProps} checked={checked} onChange={handleChange}/>
            }/>
        </Grid>
    )
}

export default FormSwitch
