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

const EMPTY_EMPLOYEE = {
  _id: '',
  full_name: '',
  age: 0,
  login_id: '',
  gender: '',
  salary: 0,
  key: ''
}

const ENDPOINTS = {
  employees: `employees`,
  usersUpload: `employee/upload`,
};

export { ENDPOINTS, STRINGS, EMPTY_EMPLOYEE };
