import type { Router } from "express";
const { EmployeeController, UploadEmployeer} =  require('../handlers/employee.handler')
const { EmployeeValidator, UploadValidator } =  require('../handlers/employee.validator')
const { ROUTES } = require('../constants')

const EmployeeRouter = (router: Router) => {
  router.route(ROUTES.EMPLOYEES).get(EmployeeValidator, EmployeeController);
  router.route(ROUTES.USERS_UPLOAD).post(UploadValidator, UploadEmployeer);
};

export default EmployeeRouter;
