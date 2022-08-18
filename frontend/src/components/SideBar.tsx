import React from "react";
import { Layout, Menu } from "antd";
import { DASHBOARD_ROUTES } from "../routes/route-paths";

const { Sider } = Layout;

type Props = {
  header?: JSX.Element;
};

const SideBar: React.FC<Props> = ({ header }) => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      {header}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={DASHBOARD_ROUTES}
      />
    </Sider>
  );
};

export default SideBar;
