const useValidator = (options) => {
    const maxLength = (maxLength, message) => (value) => {
        return value.length > maxLength && message
    }

    const minLength = (minLength, message) => (value) => {
        return value.length < minLength && message
    }

    const string = (message) => (value) => {
        return typeof value !== 'string' && message
    }

    const required = (message) => (value) => {
        return value.length === 0 && message
    }

    const email = (message) => (value) => {
        return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && message
    }

    const validate = (validators) => (value) => {
        let errorMessage;

        const result = validators
            .map((validator) => {
                const result = validator(value);
                return typeof result === 'string' ? result : '';
            })
            .filter(message => message !== '');

        if (result.length)
            errorMessage = result[0];

        return errorMessage;
    }

    return {minLength, maxLength, email, required, string, validate};
}

export default useValidator;