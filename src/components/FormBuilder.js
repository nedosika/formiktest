import React from 'react';

import {Formik, Form} from 'formik';

const FormBuilder = ({children, ...props}) => {
    const initialValues = Object.assign({}, ...children.map(({props}) => props.name && ({[props.name]: props.initialValue})));

    return (
        <Formik initialValues={initialValues} {...props}>
            {(props) => (
                <Form>
                    {
                        React.Children.map(children, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child, {error: props.errors[child.props.name]});
                            }
                            return child;
                        })
                    }
                </Form>
            )}
        </Formik>
    );
};

export default FormBuilder;