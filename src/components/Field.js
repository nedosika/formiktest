import React from 'react';
import {useField} from "formik";
import {omit} from "lodash";

const Field = (props) => {
    const {label, name, error} = props;
    const [field] = useField(props);

    return (
        <div>
            <label htmlFor={name}>{label}
                <input {...field} {...omit(props, ['validate', 'restrictions', 'initialValue'])} />
                {error && <div style={{color: 'red'}}>{error}</div>}
            </label>
        </div>
    );
};

export default Field;