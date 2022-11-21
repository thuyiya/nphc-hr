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

import "./Analytics.less";

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
    <div className="analiticsMainWrapper">
      <div className="topWrapper">
        <div className="userCardWrapper comCard">
          <UserProfileView employee={selectedEmployee} />
        </div>
        <div className="userActivityWrapper comCard">
          <Acivities employee={selectedEmployee} />
        </div>
      </div>

      <div className="threeColMainWrapper">
        <div className="piechartWrapper comCard">
          <GenderGraph data={filteredData} />
          <div className="chartFilters">
            <Filter
              changeGreaterThenAge={changeGreaterThenAge}
              changeIncludedGender={changeIncludedGender}
            />
          </div>
        </div>
        <div className="fullLineGraph comCard">
          <EmployeeAge data={filteredData} />
        </div>

        <div className="employeeListWrapper comCard">
          <EmployeeList
            data={filteredData}
            changeSelectUser={changeSelectUser}
            selectedEmployeeId={selectedEmployee._id}
          />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
