import React, {useContext} from "react";
import {Grid} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {SectionDataContext} from "../../utils/app.utils";

export default function FormCheckbox({id, idx, name, text, required}) {
    const [data, setData] = useContext(SectionDataContext)

    const getId = (idx) => {
        return `${id}-opt-${idx}`
    }

    const getName = (idx) => {
        return `${name}Opt${idx}`
    }

    const checkboxProps = (idx) => {
        return {
            id: getId(idx),
            name: getName(idx),
            required: required,
            color: 'primary'
        }
    }

    const isChecked = () => {
        // TODO: Get section from context
        let checkbox = data
            .sections['section']
            .fields
            .filter(field => field.id === getId(idx))

        return checkbox.checked
    }

    const handleChange = ({target}, checked) => {
        setData({
            ...data,
            ['section']: {
                fields: [{
                    id: target.id,
                    label: text,
                    value: checked
                }]
            }
        })
    }

    return (
        <Grid key={key} sm={4} item>
            <FormControlLabel label={text} control={
                <Checkbox {...checkboxProps(idx)} checked={isChecked} onChange={handleChange}/>
            }/>
        </Grid>
    )
}

export default FormCheckbox
