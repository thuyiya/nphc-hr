import './EmployeeAge.less';
import { FC } from 'react';
import BarChart from '../../../components/BarChart/ChartContainer';

type Props = {
    data: any
}

const EmployeeAge:FC<Props> = ({ data }) => {
    return (
        <div className='container pane'>
            <div className='header'>Age</div>
            <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
            <BarChart data={data} width={1000} height={550}/>
            </div>                
        </div>
    )
}

export default EmployeeAge;