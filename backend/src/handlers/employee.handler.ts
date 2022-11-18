import type { Request, Response } from "express";
import { createEmployee } from "../services/employee.services";
import { SUCCESS_RESPONSE, ERROR_RESPONSE } from "../common/messages";
import data from '../sample-data/employees.json'

const GetEmployees = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(SUCCESS_RESPONSE.success(data.map(x => {
      return {
        "full_name": x.full_name,
        "login_id": x.login_id,
        "salary": x.salary,
        "profile_pic": x.profile_pic
    }
    })));
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
    return res.status(200).json(SUCCESS_RESPONSE.success({}));
  } catch (e) {
    return res.status(400).json(ERROR_RESPONSE.notFound((e as Error).message));
  }
};

const UploadEmployer = async (req: Request, res: Response) => {
  try {
    return res.status(400).json(SUCCESS_RESPONSE.success({}));
  } catch (e) {
    return res.status(400).json(ERROR_RESPONSE.notFound((e as Error).message));
  }
};

export { GetEmployees, UploadEmployer, RemoveEmployee, CreateEmployees };
