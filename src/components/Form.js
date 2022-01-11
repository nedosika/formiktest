import React from 'react';

const Form = ({onSubmit, children}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

export default Form;