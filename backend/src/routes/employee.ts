import type { Router } from "express";
const { GetEmployees, UploadEmployer, RemoveEmployee, CreateEmployees, UpdateEmployee} =  require('../handlers/employee.handler')
const { EmployeeValidator, UploadValidator } =  require('../handlers/employee.validator')
const { ROUTES } = require('../constants')

const EmployeeRouter = (router: Router) => {
  router.route(ROUTES.EMPLOYEES).get(EmployeeValidator, GetEmployees);
  router.route(ROUTES.EMPLOYEES).put(UpdateEmployee);
  router.route(ROUTES.EMPLOYEES).post(CreateEmployees);
  router.route(ROUTES.EMPLOYEES_BY_ID).delete(RemoveEmployee);
  router.route(ROUTES.USERS_UPLOAD).post(UploadValidator, UploadEmployer);
};

export default EmployeeRouter;
