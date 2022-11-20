import { Typography, Space, Input } from "antd";
import {
  DollarOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { numberValidationForInputs } from "../utils";

const { Text } = Typography;

type Props = {
  prefix: boolean;
  label: string;
  value?: string | number | undefined;
  testId?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
};


const NumberInputs: React.FC<Props> = ({ prefix, label, value, onChange, testId = "input_amount" }) => (
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
      data-testid={`${testId}`}
      size="large"
      placeholder="Amount Ex. 1000"
      prefix={<DollarOutlined />}
      bordered={false}
      value={value}
      status={numberValidationForInputs(value)}
      onChange={onChange}
    />
  </Space>
);

export default NumberInputs;
