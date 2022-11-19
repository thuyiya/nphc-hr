import "./Dashboard.less";
import DashboardLayout from "../../components/DashboardLayout";
import Employee from "../../components/Employee";

function Dashboard() {
  return (
    <DashboardLayout>
      <Employee />
    </DashboardLayout>
  );
}

export default Dashboard;
