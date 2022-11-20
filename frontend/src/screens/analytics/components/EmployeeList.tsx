import { FC } from 'react';
import { List } from 'antd';
import { EmployeeType } from '../../../types';
import './EmployeeList.less';

type Props = {
    data: any;
    changeSelectUser: any
}

const EmployeeList:FC<Props> = ({ data, changeSelectUser }) => {
    const selectUser = (employee: EmployeeType) => {
        changeSelectUser(employee);
    }

    return (
        <div className='container pane'>
            <div className='header'>User List</div>
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(employee: EmployeeType) => <List.Item className='button-item' onClick = {() => selectUser(employee)}>
                    <div>
                        {employee.full_name + ':' + employee.age}
                    </div>
                </List.Item>}
            />
        </div>
    )
}

export default EmployeeList;