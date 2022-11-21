import { FC } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./UserProfileView.less";
import { EmployeeType } from "../../../types";

type Props = {
  employee: EmployeeType;
};

const UserProfileView: FC<Props> = ({ employee }) => {
  return (
    <div className="userProfileContainer">
      <div className="avatarView">
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
      <div className="title">User Profile</div>
      <div>
        <div className="infoView">
          <div className="singleRow">Name: {employee.full_name}</div>
          <div className="singleRow">Gender: {employee.gender}</div>
          <div className="singleRow">Age: {employee.age}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileView;
