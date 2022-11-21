import React from "react";
import { shallow, mount } from "enzyme";
import Dashboard from "../Dashboard";
import Employee from "../components/Employee";
import { AppContext } from "../../../contexts/AppContext";

describe("Dashboard Test", () => {
  it("renders without crashing", () => {
    shallow(<Dashboard />);
  });
});
