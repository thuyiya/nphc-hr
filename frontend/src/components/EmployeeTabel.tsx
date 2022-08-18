import { Space, Table, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { EmployeeType } from "../types"
import { STRINGS } from "../constants";

const columns = [
  {
    title: STRINGS.EMPLOYEE.TABLE_KEY.ID.NAME,
    dataIndex: STRINGS.EMPLOYEE.TABLE_KEY.ID.KEY,
    key: STRINGS.EMPLOYEE.TABLE_KEY.ID.KEY,
    render: (text: string) => <a>{text}</a>,
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
    render: (salary: string) => <span>{salary}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, record: any) => (
      <Space size="middle">
        <Button type="text" size="small">
          Edit
        </Button>
        <Button type="text" danger size="small">
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];

type Props = {
    data: EmployeeType[]
}

const EmployeeTabel: React.FC<Props> = ({ data = [] }) => {
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
