import { Typography, Row, Col } from "antd";
import EmployeeTabel from "./EmployeeTabel";
import NumberInputs from "./NumberInputs";

const { Title } = Typography;

const Employee: React.FC = () => {
  return (
    <div>
      <Row>
        <Col>
          <NumberInputs prefix={true} label={"Minimum Salary"} />
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 16,
            }}
          >
            -
          </div>
        </Col>
        <Col>
          <NumberInputs prefix={false} label={"Maximum Salary"} />
        </Col>
      </Row>
      <Row>
        <Title level={4} style={{ marginTop: 16, marginBottom: 16 }}>
          Employees
        </Title>
        <Col span={24}>
          <EmployeeTabel data={[]}/>
        </Col>
      </Row>
    </div>
  );
};

export default Employee;
