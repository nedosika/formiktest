import React from 'react';

import {Formik, Form} from 'formik';

const FormBuilder = ({children, ...props}) => {
    const initialValues = Object.assign({}, ...children.map(({props}) => props.name && ({[props.name]: props.initialValue})));
    const restrictRules = Object.assign({}, ...children.map(({props}) => props.name && ({[props.name]: props.restrictions})));

    return (
        <Formik initialValues={initialValues} {...props}>
            {({errors, handleChange, setFieldValue}) => {

                const onChange = (event) => {
                    const value = event.target.value;
                    const name = event.target.name;

                    if(!(restrictRules[name] && restrictRules[name](value)))
                        handleChange(event)
                }

                return (
                    <Form>
                        {
                            React.Children.map(children, (child) => {
                                if (React.isValidElement(child)) {
                                    return React.cloneElement(child, {error: errors[child.props.name], onChange});
                                }
                                return child;
                            })
                        }
                    </Form>
                )
            }}
        </Formik>
    );
};

export default FormBuilder;