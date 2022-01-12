import React from 'react';
import {useField} from "formik";

const Select = ({label, name, error, options, initialValue, validate, children, ...props}) => {
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