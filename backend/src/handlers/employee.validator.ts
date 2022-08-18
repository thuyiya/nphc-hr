import type { Request, Response, NextFunction } from 'express';
import { ERROR_RESPONCE } from '../common/messages';

const EmployeeValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    next()
  } catch (e) {
    return res.status(400).json(ERROR_RESPONCE.validation((e as Error).message));
  }
};

export {
  EmployeeValidator,
};
