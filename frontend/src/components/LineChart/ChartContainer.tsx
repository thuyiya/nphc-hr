import { useEffect, FC } from "react";
import draw from "./GraphDraw";
import { EmployeeType } from "../../types";

type Props = {
  employee: EmployeeType;
  width: number;
  height: number;
}

const ChartContainer:FC<Props> = ({ employee, width, height }) => {
  useEffect(() => {
    draw(employee, width, height);
  }, [employee]);

  return <div className="vis-linechart" />;
};

export default ChartContainer;