import React, {useContext} from "react";
import {FormControl, Grid, MenuItem} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/core/styles";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";

const styles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}))

// TODO: Load previous state from context (ref. FormTextField)
const FormSelect = ({id, name, text, required, options}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    const classes = styles()

    const selectProps = {
        id: id,
        name: name,
        label: text,
        labelId: text
            .toLowerCase()
            .replace(' ', '-'),
        displayEmpty: true,
        autoWidth: true
    }

    // FIXME: Assuming wrong pattern from context
    const getValue = () => {
        let select = data[section].fields.filter(field => field.id === id)

        return select.idx
    }

    const handleChange = ({target}) => {
        setData({
            ...data,
            [section]: [
                {
                    id: id,
                    value: options[target.value]
                }
            ]
        })
    }

    return (
        <Grid item sm={6}>
            <FormControl className={classes.formControl} variant={"outlined"} required={required} fullWidth>
                <InputLabel id={selectProps.labelId}>{text}</InputLabel>
                <Select {...selectProps} value={getValue} onChange={handleChange}>
                    {options.map((value, idx) => (
                        <MenuItem key={`${value}-opt`} value={idx}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default FormSelect
