const useValidator = (options) => (value) => {
    const result = options && Object.entries(options).map(([key, option]) => {
        switch (key) {
            case 'min':
                return value.length < option.value && option.message
        }
    });

    if (result?.length > 0)
        return result[0]

    return false
}

export default useValidator;