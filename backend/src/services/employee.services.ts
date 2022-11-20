import { EmployeeType } from "models/app";
import { Employee } from "../models/db";

const createEmployee = async (empObject: EmployeeType) => {
  try {
    return await Employee.create(empObject);
  } catch (e) {
    throw e;
  }
};

const insertManyEmployee = async (manyEmp: Array<EmployeeType>) => {
  try {
    return await Employee.insertMany(manyEmp);
  } catch (e) {
    throw e;
  }
};

const removeEmployeeById = async (id: string) => {
  try {
    return await Employee.deleteOne({ _id: id });
  } catch (e) {
    throw e;
  }
};

const getAllEmployee = async () => {
  try {
    return await Employee.find({});
  } catch (e) {
    throw e;
  }
};

const updateEmployeeById = async (empObject: EmployeeType) => {
  try {
    return await Employee.updateOne({ _id: empObject._id }, { 
      full_name: empObject.full_name,
      salary: empObject.salary,
      login_id: empObject.login_id,

     });
  } catch (e) {
    throw e;
  }
};

export { createEmployee, removeEmployeeById, getAllEmployee, updateEmployeeById, insertManyEmployee };
