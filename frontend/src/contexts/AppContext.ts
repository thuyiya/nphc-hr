import * as React from "react";
import { EmployeeType } from "../types";

export type AppContextType = {
  state: {
    employees: EmployeeType[];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState: (update: any) => void;
};

export const initState = {
  employees: [],
  user: {
    full_name: 'Adam Snow'
  }
};

export const AppContext = React.createContext<AppContextType | null>(null);
