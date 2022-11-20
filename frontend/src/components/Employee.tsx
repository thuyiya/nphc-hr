import React, { useEffect, useState, useContext } from "react";
import { Typography, Row, Col } from "antd";
import EmployeeTable from "./EmployeeTabel";
import NumberInputs from "./NumberInputs";
import EndpointService from "../services/endpoint";
import UploadEmployeeWithCsv from "./UploadEmployeeWithCsv";
import { EmployeeType } from "../types";
import { AppContext, AppContextType } from "../contexts/AppContext";
import './styles/TopHeader.less';
const { Title } = Typography;

const Employee = () => {
  const {
    state: { employees },
    setState,
  } = useContext(AppContext) as AppContextType;
  const [maximumSalary, setMaximumSalary] = useState("");
  const [minimumSalary, setMinimumSalary] = useState("");

  const getEmployees = async () => {
    try {
      const endpoint = new EndpointService();
      const response = await fetch(endpoint.getEmployees);

      const _results = await response.json();
      const employees = _results.data.map((_data: any) => ({
        key: _data._id,
        ..._data,
      }));
      setState({
        employees,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = (record: EmployeeType[]): EmployeeType[] => {
    if (
      maximumSalary !== undefined &&
      maximumSalary !== "" &&
      minimumSalary !== undefined &&
      minimumSalary !== "" &&
      (Number(maximumSalary) > 0 || Number(minimumSalary) > 0)
    ) {
      return record.filter(
        (emp: EmployeeType) =>
          emp.salary >= Number(minimumSalary) &&
          emp.salary <= Number(maximumSalary),
      );
    } else if (minimumSalary !== undefined && Number(minimumSalary) > 0) {
      return record.filter(
        (emp: EmployeeType) => emp.salary >= Number(minimumSalary),
      );
    }
    if (maximumSalary !== undefined && Number(maximumSalary) > 0) {
      return record.filter(
        (emp: EmployeeType) => emp.salary <= Number(maximumSalary),
      );
    } else {
      return record;
    }
  };

  // const getFilterdData = useMemo(() => filterData(data), []);

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      <div className="topWrapper">
        <div className="inputMainWrapper">
          <div className="singleCol">
            <NumberInputs
              prefix={true}
              label={"Minimum Salary"}
              testId={"minimum_salary"}
              value={minimumSalary}
              onChange={(input) => setMinimumSalary(input.target.value)}
            />
          </div>
          <div className="singleCol">
            <NumberInputs
              prefix={false}
              testId={"maximum_salary"}
              label={"Maximum Salary"}
              value={maximumSalary}
              onChange={(input) => setMaximumSalary(input.target.value)}
            />
          </div>
        </div>
        <div className="submitButtonWrapper">
          <UploadEmployeeWithCsv />
        </div>
      </div>
      <Row>
        <Title level={4} style={{ marginTop: 16, marginBottom: 16 }}>
          Employees
        </Title>
        <Col span={24}>
          <EmployeeTable data={filterData(employees)} />
        </Col>
      </Row>
    </div>
  );
};

export default Employee;
