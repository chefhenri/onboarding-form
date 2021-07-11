import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

import {SectionDataContext} from "../../utils/app.utils";

// const FormTextField = (props) => {
//     const fieldProps = {
//         id: props.id,
//         name: props.name,
//         type: props.type,
//         label: props.text,
//         required: props.required,
//         variant: 'outlined',
//         fullWidth: true
//     }
//
//     return (
//         <Grid item sm={6}>
//             <SectionContext.Consumer>
//                 {({data, update}) => (
//                     <TextField {...fieldProps} defaultValue={data[fieldProps.name] ? data[fieldProps.name].value : ''}
//                                onChange={event => {
//                                    update({
//                                        ...data,
//                                        [props.name]: {id: props.id, value: event.target.value, label: props.text}
//                                    })
//                                }}/>
//                 )}
//             </SectionContext.Consumer>
//         </Grid>
//     )
// }

const FormTextField = ({key, id, name, type, text, required, section}) => {
    const [data, setData] = useContext(SectionDataContext)

    const value = data[section][name] ? data[section][name].value : '';

    const fieldProps = {
        key: key,
        id: id,
        name: name,
        type: type,
        label: text,
        required: required,
        defaultValue: value,
        variant: 'outlined',
        fullWidth: true
    }

    const handleValueChange = (event) => {
        setData({
            ...data,
            [section]: {
                fields: [
                    {
                        id: id,
                        label: text,
                        value: event.target.value
                    }
                ]
            }
        })
    }

    return (
        <Grid item sm={6}>
            <TextField {...fieldProps} onChange={handleValueChange}/>
        </Grid>
    )
}

export default FormTextField
