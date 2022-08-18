interface EmployeeType {
  key: React.Key;
  id: string;
  name: string;
  login: string;
  salary: number;
}
interface EnvConfigType {
  base_url: string;
  v: string;
}

export type { EnvConfigType, EmployeeType };
