import React from "react";
import FormBuilder from "./components/FormBuilder";
import Field from "./components/Field";
import Select from "./components/Select";
import useValidator from "./hooks/useValidator";
import useTerminator from "./hooks/useTerminator";

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateFirstName(value) {
    let error;
    if (value === 'admin') {
        error = 'Nice try!';
    }
    return error;
}

function App() {
    const {min, max} = useTerminator();
    return (
        <FormBuilder
            onSubmit={(values) => console.log(values)}
        >
            <Field
                name="firstName"
                initialValue="test"
                placeholder="Jane"
                label="First Name:"
            />
            <Field
                name="lastName"
                initialValue=''
                placeholder="Doe"
                label="Last Name:"
                validate={max(5, 'too long')}
            />
            <Field
                name="email"
                initialValue=''
                placeholder="jane@acme.com"
                type="email"
                label="Email:"
            />
            <Select
                name="color"
                initialValue="red"
                label="Color:"
            >
                <option value='red'>Red</option>
                <option value='green'>Green</option>
                <option value='yellow'>Yellow</option>
            </Select>
            <button type="submit">Submit</button>
        </FormBuilder>
    );
}

export default App;
