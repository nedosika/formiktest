import React from 'react';

const Field = ({label, initialValue, ...props}) => {
    const [value, setValue] = React.useState(initialValue);

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
    }

    return (
        <>
            <label>
                {label}
                <input value={value} {...props} onChange={handleChange}/>
            </label>
        </>
    );
};

export default Field;