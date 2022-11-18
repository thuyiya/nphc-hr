const ERROR_RESPONSE = {
  notFound: (e: any) => {
    return {
      code: 4040,
      message: "NOT_FOUND",
      success: false,
      data: e,
    };
  },
  validation: (e: any) => {
    return {
      code: 4011,
      message: 'VALIDATION_ERROR',
      success: false,
      data: e
    }
  },
  errorMessage: (s: any) => {
    return {
      Error: s,
    };
  },
};

const SUCCESS_RESPONSE = {
  success: (s: any) => {
    return {
      code: 2001,
      message: "SUCCESSFULL",
      success: true,
      data: s,
    };
  },
};

export {
  ERROR_RESPONSE,
  SUCCESS_RESPONSE,
};
