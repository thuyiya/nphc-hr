import React, { useEffect, useReducer } from "react";
import { Typography, Row, Col } from "antd";
import EmployeeTabel from "./EmployeeTabel";
import NumberInputs from "./NumberInputs";
import EndpointService from "../services/endpoint";
import UploadEmplyeeWithCsv from "./UploadEmplyeeWithCsv";
const { Title } = Typography;

type StateType = {
  maximumSalary: number | undefined;
  minimumSalary: number | undefined;
  data: [];
  filteredData: [];
};

type ActionType = {
  type: string;
  payload: any;
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "MAX":
      return {
        ...state,
        maximumSalary: action.payload,
      };
    case "MIN":
      return {
        ...state,
        minimumSalary: action.payload,
      };
    default:
      return state;
  }
};

const Employee: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    maximumSalary: undefined,
    minimumSalary: undefined,
    data: [],
    filteredData: [],
  });

  const getEmplyees = async () => {
    try {
      const endpoint = new EndpointService();
      const response = await fetch(endpoint.getEmployees);

      const _results = await response.json();
      dispatch({
        type: "SET_DATA",
        payload: _results.data.map((_data: any) => ({
          key: _data.id,
          id: _data.id,
          piture: _data.profile_pic,
          name: _data.full_name,
          login: _data.login_id,
          salary: _data.salary,
        })),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmplyees();
  }, []);

  const { minimumSalary, maximumSalary, data } = state;

  return (
    <div>
      <Row>
        <Col>
          <NumberInputs
            prefix={true}
            label={"Minimum Salary"}
            value={minimumSalary}
            onChange={(input) =>
              dispatch({
                type: "MIN",
                payload: input.target.value,
              })
            }
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
            onChange={(input) =>
              dispatch({
                type: "MAX",
                payload: input.target.value,
              })
            }
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
          <EmployeeTabel data={data} />
        </Col>
      </Row>
    </div>
  );
};

export default Employee;
