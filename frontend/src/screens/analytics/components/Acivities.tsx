import { FC } from 'react';
import './Acivities.less';
import { EmployeeType } from '../../../types';
import LineChart from "../../../components/LineChart/ChartContainer";

type Props = {
    employee: EmployeeType
}

const Acivities:FC<Props> = ({ employee }) => {

    const width = 1100, height = 250;

    return (
        <div className='container pane' >
            <div className='header'>User Acivities</div>
            <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                {employee.activities.length > 0 && <LineChart data={employee} width={width} height={height}/>}
            </div>
        </div>
    )
}

export default Acivities;