import './Dashboard.less';
import DashboardLayout from '../../components/DashboardLayout';
import Employee from '../../components/Employee';

function Dashboard() {
  return (
    <div className="App">
      <DashboardLayout>
        <Employee />
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;