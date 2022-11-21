import { FC } from "react";
import { EmployeeType } from "../../../types";
import LineChart from "../../../components/LineChart/ChartContainer";

import "./Acivities.less";

type Props = {
  employee: EmployeeType;
};

const Acivities: FC<Props> = ({ employee }) => {
  const width = 900,
    height = 250;

  return (
    <div className="activityContainer">
      <div className="activityHeader">User Acivities</div>
      <div style={{ overflowX: "scroll", overflowY: "hidden" }}>
        {employee.activities.length > 0 && (
          <LineChart employee={employee} width={width} height={height} />
        )}
      </div>
    </div>
  );
};

export default Acivities;
