import React from 'react';
import {useField} from "formik";

const Field = ({label, name, error, validate, initialValue, ...props}) => {
    const [field] = useField({...props, name, error, validate, initialValue});

    return (
        <div>
            <label htmlFor={name}>{label}
                <input {...field} {...props} />
                {error && <div style={{color: 'red'}}>{error}</div>}
            </label>
        </div>
    );
};

export default Field;