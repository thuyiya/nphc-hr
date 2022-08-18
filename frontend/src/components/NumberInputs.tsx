import { Typography, Space, Input } from "antd";
import {
  DollarOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

type Props = {
  prefix: boolean;
  label: string;
};


const NumberInputs: React.FC<Props> = ({ prefix, label }) => (
  <Space className="input-container">
    {prefix && (
      <div className="input-prefix-icon">
        <FileSearchOutlined style={{ fontSize: 24 }} />
      </div>
    )}
    <div className="filter-input-prefix">
      <Text className="filter-input-text-title">{label}</Text>
      <Text className="filter-input-text-description" type="secondary">
        Enter Amount
      </Text>
    </div>
    <Input
      size="large"
      placeholder="Amount Ex. 1000"
      prefix={<DollarOutlined />}
      bordered={false}
    />
  </Space>
);

export default NumberInputs;
