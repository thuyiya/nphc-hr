import "./EmployeeAge.less";
import { FC } from "react";
import BarChart from "../../../components/BarChart/ChartContainer";
import { EmployeeType } from "../../../types";

type Props = {
  data: Array<EmployeeType>;
};

const EmployeeAge: FC<Props> = ({ data }) => {
  return (
    <div className="employeeAgeContainer">
      <div className="employeeAgeHeader">Age</div>
      <div style={{ overflowX: "scroll", overflowY: "hidden" }}>
        <BarChart data={data} width={1000} height={550} />
      </div>
    </div>
  );
};

export default EmployeeAge;
