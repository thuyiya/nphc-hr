/* eslint-disable jsx-a11y/no-access-key */
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { DASHBOARD_ROUTES } from "../routes/route-paths";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

type Props = {
  header?: JSX.Element;
};

const SideBar: React.FC<Props> = ({ header }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(location.pathname);

  function handleClick(e: any) {
    setActive(e.key);
    navigate(DASHBOARD_ROUTES.filter((route) => e.key === route.key)[0].to);
  }

  return (
    <Sider
      trigger={null}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      {header}
      <Menu
        onClick={handleClick}
        theme="dark"
        selectable
        mode="inline"
        defaultSelectedKeys={[active]}
        selectedKeys={[active]}
        items={DASHBOARD_ROUTES}
        style={{ backgroundColor: "transparent", color: "#ffffff" }}
      />
    </Sider>
  );
};

export default SideBar;
