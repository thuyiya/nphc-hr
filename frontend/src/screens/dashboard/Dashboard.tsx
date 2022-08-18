import './Dashboard.less';
import DashboardLayout from '../../components/DashboardLayout';
import UploadEmplyeeWithCsv from '../../components/UploadEmplyeeWithCsv';
import Employee from '../../components/Employee';

function Dashboard() {
  return (
    <div className="App">
      <DashboardLayout>
        <UploadEmplyeeWithCsv />
        <Employee />
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;