import { ObjectId } from 'mongoose';

interface EmployeeType {
  _id: ObjectId;
  code: string;
  full_name: string;
  login_id: string;
  profile_pic: string;
  salary: number;
}

export type { EmployeeType };
