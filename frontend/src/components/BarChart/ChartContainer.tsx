import { useEffect, FC } from "react";
import { EmployeeType } from "../../types";
import draw from "./GraphDraw";

type Props = {
  data: Array<EmployeeType>;
  width: number;
  height: number;
}

const ChartContainer:FC<Props> = ({ data, width, height }) => {
  useEffect(() => {
    draw(data, width, height);
  }, [data]);

  return <div className="vis-barchart" />;
};

export default ChartContainer;