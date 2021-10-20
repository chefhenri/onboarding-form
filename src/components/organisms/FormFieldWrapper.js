import React from "react";

import FormTextArea from "../molecules/FormTextArea";
import FormCheckboxGroup from "./FormCheckboxGroup";
import FormDatePicker from "../molecules/FormDatePicker";
import FormSelect from "../molecules/FormSelect";
import FormSliderGroup from "./FormSliderGroup";
import FormSwitch from "../molecules/FormSwitch";
import FormTextField from "../molecules/FormTextField";

const FormFieldWrapper = ({id, name, type, text, required, initial, options, size}) => {
    // TODO: Add 'hint' prop to component props
    switch (type) {
        case 'area':
            return (
                <FormTextArea key={id} {...{id, name, text, type, required}}/>
            )
        case 'box':
            return (
                <FormCheckboxGroup key={id} {...{id, name, text, required, options, size}}/>
            )
        case 'date':
            return (
                <FormDatePicker key={id} {...{id, name, text, required}}/>
            )
        case 'select':
            return (
                <FormSelect key={id} {...{id, name, text, required, options}}/>
            )
        case 'slider':
            return (
                <FormSliderGroup key={id} {...{text}}/>
            )
        case 'switch':
            return (
                <FormSwitch key={id} {...{id, name, text, initial}}/>
            )
        default:
            return (
                <FormTextField key={id} {...{id, name, text, type, required}}/>
            )
    }
}

export default FormFieldWrapper