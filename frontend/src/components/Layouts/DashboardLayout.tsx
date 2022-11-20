import { Layout } from "antd";
import SideBar from "../SideBar/SideBar";
import Profile from "../Profiles/BoxViewProfile";
import { Outlet } from "react-router-dom";

const { Content } = Layout;


const DashboardLayout = () => (
  <Layout>
    <SideBar header={<Profile name="Long User Name" />} />
    <Layout>
      <Content style={{ margin: "8px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: window.innerHeight }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default DashboardLayout;
