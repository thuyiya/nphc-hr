import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

type Props = {
    children: JSX.Element,
  };

const DashboardLayout: React.FC<Props> = ({ children }) => (
  <Layout>
    <Layout>
      {/* <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      /> */}
      <Content style={{ margin: "8px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: window.innerHeight }}
        >
          {children}
        </div>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  </Layout>
);

export default DashboardLayout;
