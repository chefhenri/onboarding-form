import React from "react";

import FormTextArea from "../molecules/FormTextArea";
import FormCheckboxGroup from "./FormCheckboxGroup";
import FormSelect from "../molecules/FormSelect";
import FormSwitch from "../molecules/FormSwitch";
import FormTextField from "../molecules/FormTextField";
import FormDatePicker from "../molecules/FormDatePicker";

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
                // FIXME: Broken, see component
                <FormDatePicker key={id} {...{id, name, text, required}}/>
                // <></>
            )
        case 'select':
            return (
                <FormSelect key={id} {...{id, name, text, required, options}}/>
            )
        case 'slider':
            return (
                // FIXME: Broken, see component
                // <FormSliderGroup key={id} {...{id, name, text}}/>
                <></>
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
