import type { Request, Response } from "express";
import { SUCCESS_RESPONCE, ERROR_RESPONCE } from "../common/messages";
import data from '../sample-data/employees.json'

const EmployeeController = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(SUCCESS_RESPONCE.success(data));
  } catch (e) {
    return res.status(400).json(ERROR_RESPONCE.notFound((e as Error).message));
  }
};

export { EmployeeController };
