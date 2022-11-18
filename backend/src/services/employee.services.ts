import { EmployeeType } from "models/app";
import { Employee } from "../models/db";

const createEmployee = async (empObject: EmployeeType) => {
  try {
    return await Employee.create(empObject);
  } catch (e) {
    throw e;
  }
};

export { createEmployee };
