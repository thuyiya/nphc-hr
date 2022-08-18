import type { Router } from "express";
const { GetEmployees, UploadEmployeer, RemoveEmployee} =  require('../handlers/employee.handler')
const { EmployeeValidator, UploadValidator } =  require('../handlers/employee.validator')
const { ROUTES } = require('../constants')

const EmployeeRouter = (router: Router) => {
  router.route(ROUTES.EMPLOYEES).get(EmployeeValidator, GetEmployees, RemoveEmployee);
  router.route(ROUTES.EMPLOYEES_BY_ID).delete(RemoveEmployee);
  router.route(ROUTES.USERS_UPLOAD).post(UploadValidator, UploadEmployeer);
};

export default EmployeeRouter;
