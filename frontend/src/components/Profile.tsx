import React from "react";
import { Avatar, Typography } from "antd";
import { PictureOutlined } from "@ant-design/icons";

const { Title } = Typography;

type Props = {
    name?: string
}

const SideBar: React.FC<Props> = ({ name = "No Name Found" }) => {
  return (
    <div className="logo-container">
      <Avatar className="logo" size={64} icon={<PictureOutlined />} />
      <Title className="logo-text" level={5}>
           {name}
      </Title>
    </div>
  );
};

export default SideBar;
