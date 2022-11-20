import { FC } from 'react';
import { Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./UserProfileView.less";
import { EmployeeType } from '../../../types';

const { Text } = Typography;

type Props = {
    employee: EmployeeType
}

const UserProfileView: FC<Props> = ({ employee }) => {
    return (
        <div className='container'>
            <Text strong>User Profile</Text>
            <div>
                <div className={'avatar-view'}>
                    <Avatar size={64} icon={<UserOutlined />} />
                </div>
                <div className={'info-view'}>
                    <div>name: {employee.full_name}</div>
                    <div>gender: {employee.gender}</div>
                    <div>age: {employee.age}</div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileView;