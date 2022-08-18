import { Layout } from "antd";
import React from "react";
import SideBar from "./SideBar";
import Profile from "./Profile";

const { Content } = Layout;

type Props = {
  children: JSX.Element[] | JSX.Element
};

const DashboardLayout: React.FC<Props> = ({ children }) => (
  <Layout>
    <SideBar header={<Profile name="Long User Name" />} />
    <Layout>
      <Content style={{ margin: "8px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: window.innerHeight }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default DashboardLayout;
