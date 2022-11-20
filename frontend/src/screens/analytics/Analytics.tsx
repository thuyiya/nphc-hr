import "./Analytics.less";
import { useState, useContext, useEffect, useMemo } from "react";
import { Layout, Col, Row } from "antd";
import UserProfileView from "./components/UserProfileView";
import { EmployeeType, GenderType } from "../../types";
import { AppContext, AppContextType } from "../../contexts/AppContext";
import GenderGraph from "./components/GenderGraph";
import Acivities from "./components/Acivities";
import Filter from "./components/Filter";
import EmployeeAge from "./components/EmployeeAge";
import EmployeeList from "./components/EmployeeList";

const { Sider, Content } = Layout;

function Analytics() {
  const [selectedEmployee, setEmployee] = useState<EmployeeType>({
    _id: "",
    full_name: "",
    age: 0,
    login_id: "",
    gender: "Unknown",
    salary: 0,
    key: "",
    activities: [],
  });
  const {
    state: { employees },
  } = useContext(AppContext) as AppContextType;
  const [includedGender, setIncludedGender] = useState<Array<GenderType>>([
    "Male",
    "Female",
    "Unknown",
  ]);
  const [greaterThenAge, setGreaterThenAge] = useState(0);

  const changeGreaterThenAge = (value: number) => {
    setGreaterThenAge(value);
  };

  const changeSelectUser = (value: EmployeeType) => {
    setEmployee(value);
  };

  const changeIncludedGender = (value: Array<GenderType>) => {
    setIncludedGender(value);
  };

  const filterEmployeeData = () => {
    return employees
    .filter((user) => includedGender.indexOf(user.gender) !== -1)
    .filter((user) => user.age > greaterThenAge)
  }

  const filteredData = useMemo(() => filterEmployeeData(), [includedGender, employees, greaterThenAge])

  useEffect(() => {
    if (employees && employees.length > 0) {
      setEmployee(employees[0]);
    }
  }, []);

  return (
    <div>
      <Row>
        <Col span={6}>
          <Sider width={300} className="sider">
            <Content style={{ height: 200 }}>
              <UserProfileView employee={selectedEmployee} />
            </Content>
            <Content style={{ height: 300 }}>
              <GenderGraph data={filteredData} />
            </Content>
            <Content style={{ height: 400 }}>
              <Filter
                changeGreaterThenAge={changeGreaterThenAge}
                changeIncludedGender={changeIncludedGender}
              />
            </Content>
          </Sider>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={24}>
              <Acivities employee={selectedEmployee} />
            </Col>
            <Col span={16}>
              <EmployeeAge data={filteredData} />
            </Col>
            <Col span={8}>
              <Sider width={300} style={{ backgroundColor: "#eee" }}>
                <EmployeeList
                  data={filteredData}
                  changeSelectUser={changeSelectUser}
                />
              </Sider>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Analytics;
