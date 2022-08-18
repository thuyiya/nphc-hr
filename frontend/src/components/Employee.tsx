import { Typography, Row, Col } from "antd";

const { Title } = Typography;

const Employee: React.FC = () => {
  return (
    <div>
      <Row>
        <Col>Filter Input 1</Col>
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
        <Col>Filter Input 2</Col>
      </Row>
      <Row>
        <Title level={4} style={{ marginTop: 16, marginBottom: 16 }}>
          Employees
        </Title>
        <Col span={24}>Employee Table</Col>
      </Row>
    </div>
  );
};

export default Employee;
