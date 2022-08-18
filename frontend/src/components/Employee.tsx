import React, { useEffect, useReducer, useMemo, useState } from "react";
import { Typography, Row, Col } from "antd";
import EmployeeTabel from "./EmployeeTabel";
import NumberInputs from "./NumberInputs";
import EndpointService from "../services/endpoint";
import UploadEmplyeeWithCsv from "./UploadEmplyeeWithCsv";
import { EmployeeType } from "../types";
const { Title } = Typography;

type StateType = {
  maximumSalary: number;
  minimumSalary: number;
  data: EmployeeType[];
  filteredData: EmployeeType[];
};

type ActionType = {
  type: string;
  payload: any;
};

// const reducer = (state: StateType, action: ActionType) => {
//   switch (action.type) {
//     case "SET_DATA":
//       return {
//         ...state,
//         data: action.payload,
//       };
//     case "MAX":
//       return {
//         ...state,
//         maximumSalary: action.payload
//       };
//     case "MIN":
//       return {
//         ...state,
//         minimumSalary: action.payload
//       };
//     default:
//       return state;
//   }
// };

const Employee: React.FC = () => {
  const [data, setData] = useState<EmployeeType[]>([]);
  const [maximumSalary, setMaximumSalary] = useState("");
  const [minimumSalary, setMinimumSalary] = useState("");

  const getEmplyees = async () => {
    try {
      const endpoint = new EndpointService();
      const response = await fetch(endpoint.getEmployees);

      const _results = await response.json();

      setData(
        _results.data.map((_data: any) => ({
          key: _data.id,
          id: _data.id,
          piture: _data.profile_pic,
          name: _data.full_name,
          login: _data.login_id,
          salary: _data.salary,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = (): EmployeeType[] => {
    console.log("func called");
    if (
      maximumSalary !== undefined &&
      minimumSalary !== undefined &&
      (Number(maximumSalary) > 0 || Number(minimumSalary) > 0)
    ) {
      return data.filter(
        (emp: EmployeeType) =>
          emp.salary >= Number(minimumSalary) &&
          emp.salary <= Number(maximumSalary)
      );
    } else if (maximumSalary !== undefined && Number(minimumSalary) > 0) {
      return data.filter(
        (emp: EmployeeType) => emp.salary >= Number(minimumSalary)
      );
    }
    if (minimumSalary !== undefined && Number(maximumSalary) > 0) {
      return data.filter(
        (emp: EmployeeType) => emp.salary <= Number(maximumSalary)
      );
    } else {
      return data;
    }
  };

  const getFilterdData = useMemo(() => filterData(), [data]);

  useEffect(() => {
    getEmplyees();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <NumberInputs
            prefix={true}
            label={"Minimum Salary"}
            value={minimumSalary}
            onChange={(input) => setMinimumSalary(input.target.value)}
          />
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 16,
            }}
          >
            -
          </div>
        </Col>
        <Col>
          <NumberInputs
            prefix={false}
            label={"Maximum Salary"}
            value={maximumSalary}
            onChange={(input) => setMaximumSalary(input.target.value)}
          />
        </Col>
        <Col>
          <UploadEmplyeeWithCsv />
        </Col>
      </Row>
      <Row>
        <Title level={4} style={{ marginTop: 16, marginBottom: 16 }}>
          Employees
        </Title>
        <Col span={24}>
          <EmployeeTabel data={filterData()} />
        </Col>
      </Row>
    </div>
  );
};

export default Employee;
