import type { Router } from "express";
const { EmployeeController } =  require('../handlers/employee.handler')
const { EmployeeValidator } =  require('../handlers/employee.validator')
const { ROUTES } = require('../constants')

const EmployeeRouter = (router: Router) => {
  router.route(ROUTES.EMPLOYEES).get(EmployeeValidator, EmployeeController);
};

export default EmployeeRouter;
