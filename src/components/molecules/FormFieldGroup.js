import React from "react";
import FormHeading from "../atoms/FormHeading";
import FormFieldBase from "./FormFieldBase";

const FormFieldGroup = ({id, subsection}) => {
    return (
        <>
            <FormHeading key={`${subsection.id}-heading`} {...subsection}/>
            {subsection.fields.map((field, idx) => (
                <FormFieldBase key={`${id}-field-${idx}`} {...field}/>
            ))}
        </>
    )
}

export default FormFieldGroup
