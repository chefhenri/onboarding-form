import React from "react";
import FormDatePicker from "./FormDatePicker";
import FormSelect from "./FormSelect";
import FormSwitch from "./FormSwitch";
import FormTextField from "./FormTextField";
import FormTextArea from "./FormTextArea";
import FormCheckboxGroup from "../molecules/FormCheckboxGroup";
import FormSliderGroup from "../molecules/FormSliderGroup";

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
