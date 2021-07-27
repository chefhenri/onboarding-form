import React, {useContext, useEffect} from "react";

import {SectionDataContext, SectionNameContext} from "../../utils/app.utils";
import FormDatePicker from "../atoms/FormDatePicker";
import FormSelect from "../atoms/FormSelect";
import FormSwitch from "../atoms/FormSwitch";
import FormTextField from "../atoms/FormTextField";
import FormTextArea from "../atoms/FormTextArea";
import FormCheckboxGroup from "./FormCheckboxGroup";
import FormSliderGroup from "./FormSliderGroup";

// TODO: Add 'hint' prop to component props
const FormFieldBase = ({id, name, type, text, required, hint, initial, options, size}) => {
    const [data, setData] = useContext(SectionDataContext)
    const section = useContext(SectionNameContext)

    useEffect(() => {
        setData({
            ...data,
            [section]: [
                {
                    id: id,
                    value: initial
                }
            ]
        })
    })

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

export default FormFieldBase
