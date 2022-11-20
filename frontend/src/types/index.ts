type GenderType = "Male" | "Female" | "Unknown"
interface EmployeeType {
  key: React.Key;
  _id: string;
  full_name: string;
  login_id: string;
  salary: number;
  gender: GenderType;
  age: number;
  activities: Array<any>
}
interface EnvConfigType {
  base_url: string;
  v: string;
}

export type { EnvConfigType, EmployeeType, GenderType };
