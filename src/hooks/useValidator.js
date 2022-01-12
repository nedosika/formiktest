const useValidator = (options) => {
    const maxLength = (maxLength, message) => (value) => {
        return value.length > maxLength && message
    }

    const minLength = (minLength, message) => (value) => {
        return value.length < minLength && message
    }

    const max = (max, message) => (value) => {
        return value > max && message
    }

    const min = (min, message) => (value) => {
        return value < min && message
    }

    const string = (message) => (value) => {
        return !/^[a-zA-Z]+$/.test(value) && message
    }

    const required = (message) => (value) => {
        return value.length === 0 && message
    }

    const email = (message) => (value) => {
        return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && message
    }

    const number = (message) => (value) => {
        return /\D/.test(value) && message
    }

    const pattern = (pattern, message) => (value) => {
        return pattern.test(value) && message
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

    return {minLength, maxLength, max, min, email, required, string, number, pattern, validate};
}

export default useValidator;