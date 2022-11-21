import { useEffect, FC } from "react";
import draw from "./GraphDraw";
import { EmployeeType } from "../../types";

type Props = {
  data: Array<EmployeeType>;
  width: number;
  height: number;
}

const ChartContainer:FC<Props> = ({ data, width, height }) => {
  useEffect(() => {
    draw(data, width, height);
  }, [data]);

  return <div className="vis-piechart" />;
};

export default ChartContainer;
