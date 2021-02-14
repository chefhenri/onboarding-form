import React from "react";
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
                <FormTextArea key={props.id} {...props}/>
            )
        // case 'heading':
        //     return (
        //         <FormHeading key={props.id} {...props}/>
        //     )
        case 'box':
            return (
                <FormCheckbox key={props.id} {...props}/>
            )
        case 'date':
            return (
                <FormDatePicker key={props.id} {...props}/>
            )
        case 'select':
            return (
                <FormSelect key={props.id} {...props}/>
            )
        case 'slider':
            return (
                <FormSlider key={props.id} {...props}/>
            )
        case 'switch':
            return (
                <FormSwitch key={props.id} {...props}/>
            )
        default:
            return (
                <FormTextField key={props.id} {...props}/>
            )
    }
}
