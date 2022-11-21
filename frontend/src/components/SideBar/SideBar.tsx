import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { DASHBOARD_ROUTES } from "../../routes/route-paths";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

type Props = {
  header?: JSX.Element;
};

const SideBar: React.FC<Props> = ({ header }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(location.pathname);

  function handleClick(e: { key: string }) {
    setActive(e.key);
    navigate(DASHBOARD_ROUTES.filter((route) => e.key === route.key)[0].to);
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
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
