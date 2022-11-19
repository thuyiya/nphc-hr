interface EmployeeType {
  key: React.Key;
  _id: string;
  full_name: string;
  login: string;
  salary: number;
}
interface EnvConfigType {
  base_url: string;
  v: string;
}

export type { EnvConfigType, EmployeeType };
