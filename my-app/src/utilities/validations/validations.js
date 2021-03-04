export const validations = (required = false, maxLength = 10000, minLength = 0, pattern = ".") => ({
    required: { value: required, message: "This is required" },
    maxLength: { value: maxLength, message: `Max length is ${maxLength}` },
    minLength: { value: minLength, message: `Min length is ${minLength}` },
    pattern: pattern
})