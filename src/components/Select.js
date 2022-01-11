import React from 'react';

const Select = ({children, initialValue, ...props}) => {
    const [value, setValue] = React.useState(initialValue);

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
    }

    return (
        <select value={value} onChange={handleChange} {...props}>
            {children}
        </select>
    );
};

export default Select;