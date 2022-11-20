const STRINGS = {
  EMPLOYEE: {
    HOME: {
      TITLE: "Home",
    },
    TABLE_KEY: {
      ID: {
        KEY: "_id",
        NAME: "Id",
      },
      NAME: {
        KEY: "full_name",
        NAME: "Name",
      },
      LOGIN: {
        KEY: "login_id",
        NAME: "Login",
      },
      SALARY: {
        KEY: "salary",
        NAME: "Salary",
      },
    },
  },
};

const ENDPOINTS = {
  employees: `employees`,
  usersUpload: `employee/upload`,
};

export { ENDPOINTS, STRINGS };
