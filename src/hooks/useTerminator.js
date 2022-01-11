const useTerminator = (options) => {
    const min = (mean, message) => (value) => {
        return value.length < mean && message
    }

    const max = (mean, message) => (value) => {
        return value.length > mean && message
    }

    return {min, max}
}

export default useTerminator;