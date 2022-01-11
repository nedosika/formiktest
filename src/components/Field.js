import React from 'react';
import {useField} from "formik";

const Field = ({label, name, error, validate, initialValue, ...props}) => {
    const [field] = useField({...props, name, validate, initialValue, error});

    return (
        <label htmlFor={name}>{label}
            <input {...field} {...props} />
            {error && <span>{error}</span>}
        </label>
    );
};

export default Field;