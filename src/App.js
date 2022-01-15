import React from "react";
import FormBuilder from "./components/FormBuilder";
import Field from "./components/Field";
import Select from "./components/Select";
import useValidator from "./hooks/useValidator";

function App() {
    const {
        validate,
        minLength,
        maxLength,
        min,
        max,
        email,
        string,
        number,
        pattern,
        required
    } = useValidator();

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
                    required('must be required'),
                    string('must be a string'),
                    minLength(2, 'too short'),
                    maxLength(10, 'too long')
                ])}
                restrictions={validate([
                    maxLength(10)
                ])}
            />
            <Field
                name="lastName"
                initialValue=''
                placeholder="Doe"
                label="Last Name:"
                validate={validate([
                    required('must be required'),
                    string('must be a string')
                ])}
            />
            <Field
                name="age"
                initialValue="18"
                placeholder="Jane"
                label="Age:"
                validate={validate([
                    required('must be required'),
                    number('must be a number'),
                    min(2, 'too small'),
                    max(10, 'too big')
                ])}
            />
            <Field
                name="email"
                initialValue=''
                placeholder="jane@acme.com"
                validate={validate([
                    required('required'),
                    email('wrong email')
                ])}
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
