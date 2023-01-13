import {useState} from "react";
import {FormControl, Grid, MenuItem, OutlinedInput, Select} from "@mui/material";

const FormSelectField = () => {
    const [selectValue, setSelectValue] = useState('')

    const handleSelectChange = (event) => {
        setSelectValue(event.target.value)
    }

    return (
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <Select
                        displayEmpty
                        value={selectValue}
                        onChange={handleSelectChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                            return selected.length === 0 ? <em>Placeholder</em> : selected
                        }}>
                        <MenuItem disabled value="">
                            <em>Placeholder</em>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Grid>
    )
}

export default FormSelectField