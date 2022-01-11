import React from 'react';
import {useField} from "formik";

const Select = ({label, name, error, validate, initialValue, children, ...props}) => {
    const [field] = useField({...props, name, validate, initialValue, error});

    return (
        <label htmlFor={name}>{label}
            <select {...field} {...props}>
                {children}
            </select>
        </label>
    );
};

export default Select;