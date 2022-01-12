import React from "react";
import FormBuilder from "./components/FormBuilder";
import Field from "./components/Field";
import Select from "./components/Select";
import useValidator from "./hooks/useValidator";

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function App() {
    const {validate, minLength, maxLength, email, string, required} = useValidator();

    return (
        <FormBuilder
            onSubmit={(values) => console.log(values)}
        >
            <Field
                name="firstName"
                initialValue="test"
                placeholder="Jane"
                label="First Name:"
                validate={validate([
                    minLength(2, 'too short'),
                    maxLength(10, 'too long')
                ])}
            />
            <Field
                name="lastName"
                initialValue=''
                placeholder="Doe"
                label="Last Name:"
                validate={validate([string('must be string')])}
            />
            <Field
                name="email"
                initialValue=''
                placeholder="jane@acme.com"
                validate={validateEmail}
                type="email"
                label="Email:"
            />
            <Field
                name="email2"
                initialValue=''
                placeholder="jane@acme.com"
                validate={validate([
                    required('required'),
                    email('wrong email')
                ])}
                type="email"
                label="Email2:"
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
