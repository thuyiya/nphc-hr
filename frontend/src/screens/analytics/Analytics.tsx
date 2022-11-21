import { useState, useContext, useEffect, useMemo } from "react";
import UserProfileView from "./components/UserProfileView";
import { EmployeeType, GenderType } from "../../types";
import { AppContext, AppContextType } from "../../contexts/AppContext";
import EndpointService from "../../services/endpoint";
import GenderGraph from "./components/GenderGraph";
import Acivities from "./components/Acivities";
import Filter from "./components/Filter";
import EmployeeAge from "./components/EmployeeAge";
import EmployeeList from "./components/EmployeeList";

import "./Analytics.less";

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
    setState,
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

  const getEmployees = async () => {
    try {
      const endpoint = new EndpointService();
      const response = await fetch(endpoint.getEmployees);

      const _results = await response.json();
      const employees = _results.data.map((_data: EmployeeType) => ({
        ..._data,
        key: _data._id,
      }));
      setState({
        employees,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setDefaultEmployee = () => {
    if (employees && employees.length > 0 && selectedEmployee && selectedEmployee._id.length < 1) {
      setEmployee(employees[0]);
    }
  }

  const filteredData = useMemo(() => filterEmployeeData(), [includedGender, employees, greaterThenAge])

  useEffect(() => {
    setDefaultEmployee()
  }, [employees]);

  useEffect(() => {
    if (employees && employees.length < 1) {
      getEmployees();
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
