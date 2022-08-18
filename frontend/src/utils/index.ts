const numberValidationForInputs = (value: any): "" | "warning" | "error" | undefined => {
    return value === "" || value === undefined || Number(value) > 0 ? "": "error"
}

export {
    numberValidationForInputs
}