const numberValidationForInputs = (value: any): "" | "warning" | "error" | undefined => {
    return value === ""  || value === 0 || value === undefined || Number(value) > 0 ? "": "error"
}

export {
    numberValidationForInputs
}