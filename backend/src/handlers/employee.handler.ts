import type { Request, Response } from "express";
import { createEmployee, removeEmployeeById, getAllEmployee, updateEmployeeById, insertManyEmployee } from "../services/employee.services";
import { SUCCESS_RESPONSE, ERROR_RESPONSE } from "../common/messages";
import { csvToJson, madeEmployee } from "../utils";

const GetEmployees = async (req: Request, res: Response) => {
  try {
    const allEmp = await getAllEmployee();
    return res.status(200).json(SUCCESS_RESPONSE.success(allEmp));
  } catch (e) {
    return res.status(400).json(ERROR_RESPONSE.notFound((e as Error).message));
  }
};

const CreateEmployees = async (req: Request, res: Response) => {
  try {

    const body = req.body

    const newEmp = await createEmployee(body);

    return res.status(200).json(SUCCESS_RESPONSE.success(newEmp));
  } catch (e) {
    return res.status(400).json(ERROR_RESPONSE.notFound((e as Error).message));
  }
};

const RemoveEmployee = async (req: Request, res: Response) => {
  try {

    if(!req.params.id) {
      return 
    }

    const removeEmp = await removeEmployeeById(req.params.id);

    return res.status(200).json(SUCCESS_RESPONSE.success(removeEmp));
  } catch (e) {
    return res.status(400).json(ERROR_RESPONSE.notFound((e as Error).message));
  }
};

const UpdateEmployee = async (req: Request, res: Response) => {
  try {

    const removeEmp = await updateEmployeeById(req.body);

    return res.status(200).json(SUCCESS_RESPONSE.success(removeEmp));
  } catch (e) {
    return res.status(400).json(ERROR_RESPONSE.notFound((e as Error).message));
  }
};

const UploadEmployer = async (req: any, res: Response) => {
  try {
    const csvFile = req?.file
    var csvString = csvFile.buffer.toString()
    const json_data = await csvToJson(csvString); 
    const employeesData = madeEmployee(json_data);
    const empMany = await insertManyEmployee(employeesData)

    return res.status(400).json(SUCCESS_RESPONSE.success(empMany));
  } catch (e) {
    return res.status(400).json(ERROR_RESPONSE.notFound((e as Error).message));
  }
};

export { GetEmployees, UploadEmployer, RemoveEmployee, CreateEmployees, UpdateEmployee };
