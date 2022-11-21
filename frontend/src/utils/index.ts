const numberValidationForInputs = (
  value: number | string | undefined,
): "" | "warning" | "error" | undefined => {
  return value === "" || value === 0 || value === undefined || Number(value) > 0
    ? ""
    : "error";
};

export { numberValidationForInputs };
