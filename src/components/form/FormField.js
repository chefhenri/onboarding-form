import React from "react";
import FormHeading from "./FormHeading";
import FormCheckbox from "./FormCheckbox";
import FormDatePicker from "./FormDatePicker";
import FormSelect from "./FormSelect";
import FormSwitch from "./FormSwitch";
import FormTextField from "./FormTextField";
import FormTextArea from "./FormTextArea";
import FormSlider from "./FormSlider";

export default function FormField(props) {
    switch (props.type) {
        case 'area':
            return (
                <FormTextArea {...props}/>
            )
        case 'heading':
            return (
                <FormHeading {...props}/>
            )
        case 'box':
            return (
                <FormCheckbox {...props}/>
            )
        case 'date':
            return (
                <FormDatePicker {...props}/>
            )
        case 'select':
            return (
                <FormSelect {...props}/>
            )
        case 'slider':
            return (
                <FormSlider {...props}/>
            )
        case 'switch':
            return (
                <FormSwitch {...props}/>
            )
        default:
            return (
                <FormTextField {...props}/>
            )
    }
}
