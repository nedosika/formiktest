import React from 'react';

import {Formik} from "formik";

const FormBuilder = ({Form, initialValues, onSubmit}) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} component={Form}/>
    );
};

export default FormBuilder;