import { useContext } from 'react';
import { Space, Table, Button, Modal, message } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { ColumnsType } from 'antd/es/table';
import { EmployeeType } from "../types"
import { STRINGS } from "../constants";
import EndpointService from "../services/endpoint";
import EditEmployeeModal from "./EditEmployeeModal"
import { AppContextType, AppContext } from "../contexts/AppContext";

const { confirm } = Modal;

type Props = {
    data: EmployeeType[]
}

const EmployeeTable: React.FC<Props> = ({ data = []}) => {
  const { state: { employees }, setState } = useContext(AppContext) as AppContextType;
  
  const columns: ColumnsType<EmployeeType> = [
    {
      title: STRINGS.EMPLOYEE.TABLE_KEY.ID.NAME,
      dataIndex: STRINGS.EMPLOYEE.TABLE_KEY.ID.KEY,
      key: STRINGS.EMPLOYEE.TABLE_KEY.ID.KEY,
    },
    {
      title: STRINGS.EMPLOYEE.TABLE_KEY.NAME.NAME,
      dataIndex: STRINGS.EMPLOYEE.TABLE_KEY.NAME.KEY,
      key: STRINGS.EMPLOYEE.TABLE_KEY.NAME.KEY,
    },
    {
      title: STRINGS.EMPLOYEE.TABLE_KEY.LOGIN.NAME,
      dataIndex: STRINGS.EMPLOYEE.TABLE_KEY.LOGIN.KEY,
      key: STRINGS.EMPLOYEE.TABLE_KEY.LOGIN.KEY,
    },
    {
      title: STRINGS.EMPLOYEE.TABLE_KEY.SALARY.NAME,
      key: STRINGS.EMPLOYEE.TABLE_KEY.SALARY.KEY,
      dataIndex: STRINGS.EMPLOYEE.TABLE_KEY.SALARY.KEY,
      sorter: (a, b) => a.salary - b.salary,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: EmployeeType) => (
        <Space size="middle">
          <EditEmployeeModal record={record}/>
          <Button type="text" danger size="small" onClick={() => showDeleteConfirm(record)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  const removeEmployee = async (employee: EmployeeType) => {
    try {
      const endpoint = new EndpointService();
      endpoint.params = employee._id;

      const response = await fetch(endpoint.removeEmployees, { method: "DELETE"});

      await response.json();

      setState({ employees: employees.filter(emp => emp._id != employee._id)})

      message.success(`Employee ${employee.full_name} removed succssfull`)
    } catch (error) {
      message.success(`Oops!, Something went wrong with removing employee ${employee.full_name}`)
    }
  }

  const showDeleteConfirm = (employee: EmployeeType) => {
    confirm({
      title: 'Are you sure delete this employee?',
      icon: <ExclamationCircleOutlined />,
      content: `This will delete ${employee.full_name} from the database permanently`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        removeEmployee(employee)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <Table
      columns={columns}
      pagination={{
        position: ["bottomRight"],
        defaultPageSize: 10,
      }}
      dataSource={data}
    />
  );
};

export default EmployeeTable;
