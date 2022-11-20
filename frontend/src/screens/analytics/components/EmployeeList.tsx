import { FC } from 'react';
import { List } from 'antd';
import { EmployeeType } from '../../../types';
import './EmployeeList.less';

type Props = {
    data: any;
    changeSelectUser: any
    selectedEmployeeId: string
}

const EmployeeList:FC<Props> = ({ data, changeSelectUser, selectedEmployeeId }) => {
    const selectUser = (employee: EmployeeType) => {
        changeSelectUser(employee);
    }

    return (
        <div className='employee_list_container pane'>
            <div className='header'>User List</div>
            <List
                size="small"
                bordered
                dataSource={data}
                className="list"
                renderItem={(employee: EmployeeType) => <List.Item className='button-item' onClick = {() => selectUser(employee)}>
                    <div>
                        {employee.full_name + ':' + employee.age}
                    </div>
                    {employee._id === selectedEmployeeId && <div className='dot'/>}
                </List.Item>}
            />
        </div>
    )
}

export default EmployeeList;