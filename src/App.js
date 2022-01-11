import React from "react";
import Form from "./components/Form";
import Field from "./components/Field";
import Select from "./components/Select";

function App() {
    const handleSubmit = () => {
        console.log('submit')
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                type="text"
                name='firstName'
                label='First Name:'
                initialValue='sss'
            />
            <Select name='color'>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </Select>
            <button type="submit">Submit</button>
        </Form>
    );
}

export default App;
