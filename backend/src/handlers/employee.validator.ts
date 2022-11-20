import type { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { ERROR_RESPONSE } from '../common/messages';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1000000000, files: 1 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(csv)$/)) {
      return cb(new Error("Please upload a valid image file"));
    }
    cb(null, true);
  },
});

const EmployeeValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    next()
  } catch (e) {
    return res.status(400).json(ERROR_RESPONSE.validation((e as Error).message));
  }
};

const UploadValidator =  upload.single("csv")

export {
  EmployeeValidator,
  UploadValidator
};
