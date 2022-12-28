import React from "react";

import FormTextArea from "../../molecules/form/FormTextArea";
import FormCheckboxGroup from "./FormCheckboxGroup";
import FormSwitch from "../../molecules/form/FormSwitch";
import FormTextField from "../../molecules/form/FormTextField";
import FormDatePicker from "../../molecules/form/FormDatePicker";
import FormSliderGroup from "./FormSliderGroup";
import FormSelect from "../../molecules/form/FormSelect";

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
                <FormSliderGroup key={id} {...{id, name, text, options}}/>
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
