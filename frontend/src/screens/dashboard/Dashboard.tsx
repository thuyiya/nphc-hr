import './Dashboard.less';
import DashboardLayout from '../../components/DashboardLayout';
import UploadEmplyeeWithCsv from '../../components/UploadEmplyeeWithCsv';

function Dashboard() {
  return (
    <div className="App">
      <DashboardLayout>
        <UploadEmplyeeWithCsv />
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;