import React, {useContext} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {Grid} from "@material-ui/core";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

const FormSwitch = ({id, name, text}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const switchProps = {
        id: id,
        name: name,
        color: 'primary'
    }

    const isChecked = () => {
        let select = data[section].fields.filter(field => field.id === id)

        return select.checked
    }

    const handleChange = ({target}, checked) => {
        setData({
            ...data,
            [section]: {
                fields: [{
                    id: target.id,
                    label: text,
                    value: checked
                }]
            }
        })
    }

    return (
        <Grid sm={6} item>
            <FormControlLabel label={text} control={
                <Switch {...switchProps} checked={isChecked} onChange={handleChange}/>
            }/>
        </Grid>
    )
}

export default FormSwitch
