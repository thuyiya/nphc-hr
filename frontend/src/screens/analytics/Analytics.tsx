import "./Analytics.less";
import { useState, useContext, useEffect } from "react";
import { Layout } from "antd";
import UserProfileView from "./components/UserProfileView";
import { EmployeeType } from "../../types";
import { EMPTY_EMPLOYEE } from "../../constants";
import { AppContext, AppContextType } from "../../contexts/AppContext";
import GenderGraph from "./components/GenderGraph";
import Acivities from "./components/Acivities";
import Filter from "./components/Filter";

const { Sider, Content, Footer } = Layout;

function Analytics() {
  const [selectedEmployee, setEmployee] =
    useState<EmployeeType>(EMPTY_EMPLOYEE);
  const {
    state: { employees },
  } = useContext(AppContext) as AppContextType;
  const [includedGender, setIncludedGender] = useState([
    "Male",
    "Female",
    "Unknown",
  ]);
  const [greaterThenAge, setGreaterThenAge] = useState(0);

  const changeGreaterThenAge = (value: any) => {
    setGreaterThenAge(value);
  };

  const changeIncludedGender = (value: any) => {
    setIncludedGender(value);
  };

  useEffect(() => {
    if (employees && employees.length > 0) {
      setEmployee(employees[0]);
    }
  }, []);

  const filteredData = employees
    .filter((user) => includedGender.indexOf(user.gender) !== -1)
    .filter((user) => user.age > greaterThenAge);

  return (
    <div className="container">
      <Layout style={{ height: 920 }}>
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
      </Layout>
      <Layout>
      <Content style={{ height: 300 }}>
            <Acivities employee={selectedEmployee}/>
      </Content>
      <Content style={{ height: 600 }}>
        
      </Content>
      <Content style={{ height: 300 }}>
        
      </Content>
      </Layout>
    </div>
  );
}

export default Analytics;
