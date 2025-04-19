import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
import CommonCardHeadingSection from '../components/common/CommonCardHeadingSection';
import CommonButton from '../components/common/CommonButton';
import vehicle from '../../src/assets/images/cultural.jpeg'
const columns = [
    {
        title: 'BUS NO.',
        dataIndex: 'busNum',
        key: 'busNum',
        render: text => <a>{text}</a>,
        responsive: ['xs', 'sm', 'md'],
        width: 300
    },
    {
        title: 'ROUTE',
        dataIndex: 'route',
        key: 'route',
        responsive: ['xs', 'sm', 'md'],
    },
];

const data = [
    {
        key: 'busNum',
        busNum: '1',
        route: 'HardanPura ,Nehron ki Nadi, Pingalpura',
    },
    {
        key: 'busNum',
        busNum: '2',
        route: 'Bhojawash',
    },
    {
        key: 'busNum',
        busNum: '3',
        route: 'Hironiyon ka Tala',
    },
];

const Transportation = () => {
    return (
        <>
            <div>
                <CommonCardHeadingSection title="Transportation" />
            </div>
            <div className='container m-auto p-4 my-[70px]'>

                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 'max-content' }}
                    bordered
                    responsive
                    style={{ display: Flex, justifyContent: 'center', alignItems: 'center' }}
                />
            </div>
            <div className='container m-auto p-4 my-[70px]'>
                <CommonButton title="For more queries" className="text-xl md:text-2xl mb-5 Roboto-Bold px-4" justify="start" />

                <div className='px-4 my-5'>
                    <ul>
                        <li className='list-disc'><span className='font-bold'>Rupkishor Nehra</span> - 9929298644</li>
                        <li className='list-disc mt-2'><span className='font-bold'>Jasraj Nehra</span> - 9784966250</li>
                    </ul>
                </div>

                <div className='w-full flex flex-wrap gap-5'>
                    <img src={vehicle} alt="" className='transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl' />
                    <img src={vehicle} alt="" className='transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'/>
                    <img src={vehicle} alt="" className='transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'/>
                    <img src={vehicle} alt="" className='transform transition duration-500 shadow-lg hover:scale-105 hover:shadow-2xl'/>
                </div>
            </div>
        </>
    );
}

export default Transportation;
