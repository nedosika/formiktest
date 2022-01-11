import React from 'react';
import {useField} from "formik";
import useValidator from "../hooks/useValidator";

const Select = ({label, name, error, options, initialValue, children, ...props}) => {
    const validate = useValidator(options);
    const [field] = useField({...props, name, validate, initialValue, error});

    return (
        <label htmlFor={name}>{label}
            <select {...field} {...props}>
                {children}
            </select>
            {error && <span>{error}</span>}
        </label>
    );
};

export default Select;