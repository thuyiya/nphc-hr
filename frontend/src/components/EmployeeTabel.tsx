import { Space, Table, Button, Modal, message } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { ColumnsType } from 'antd/es/table';
import { EmployeeType } from "../types"
import { STRINGS } from "../constants";
import EndpointService from "../services/endpoint";
import EditEmployeeModal from "./EditEmployeeModal"

const { confirm } = Modal;

type Props = {
    data: EmployeeType[]
}

const EmployeeTabel: React.FC<Props> = ({ data = [] }) => {

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
      render: (_: any, record: any) => (
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
      endpoint.params = employee.id;
      const response = await fetch(endpoint.removeEmployees, { method: "DELETE"});

      await response.json();
      message.success(`Employee ${employee.name} removed succssfull`)
    } catch (error) {
      message.success(`Oops!, Something went wrong with removing employee ${employee.name}`)
    }
  }

  const showDeleteConfirm = (employee: EmployeeType) => {
    confirm({
      title: 'Are you sure delete this employee?',
      icon: <ExclamationCircleOutlined />,
      content: `This will delete ${employee.name} from the database permanently`,
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

export default EmployeeTabel;
