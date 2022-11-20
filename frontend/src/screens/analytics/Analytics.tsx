import "./Analytics.less";
import { Col, Row } from "antd";
import OrganizationGraphComponent from "../../components/OrganizationGraphComponent";

function Analytics() {
  return (
    <div className="container">
      <Row>
        <Col span={24}>
           <OrganizationGraphComponent />
        </Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
}

export default Analytics;
