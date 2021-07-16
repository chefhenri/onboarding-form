import React from "react";
import FormDatePicker from "../atoms/FormDatePicker";
import FormSelect from "../atoms/FormSelect";
import FormSwitch from "../atoms/FormSwitch";
import FormTextField from "../atoms/FormTextField";
import FormTextArea from "../atoms/FormTextArea";
import FormCheckboxGroup from "./FormCheckboxGroup";
import FormSliderGroup from "./FormSliderGroup";

export default function FormFieldBase(props) {
    switch (props.type) {
        case 'area':
            return (
                <FormTextArea key={props.id} {...props}/>
            )
        case 'box':
            return (
                <FormCheckboxGroup key={props.id} {...props}/>
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
                <FormSliderGroup key={props.id} {...props}/>
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
