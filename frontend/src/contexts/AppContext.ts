import * as React from "react";
import { EmployeeType } from "../types";

export type AppContextType = {
  state: {
    employees: EmployeeType[];
  };
  setState: (update: any) => void;
};

export const initState = {
  employees: [],
};

export const AppContext = React.createContext<AppContextType | null>(null);
