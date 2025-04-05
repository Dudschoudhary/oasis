import React from 'react';
import { Table, Tag } from 'antd';
import CommonButton from '../../components/common/CommonButton';
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection';

const columns = [
    {
        title: 'S. NO.',
        dataIndex: 'key',
        key: 'key',
        render: text => <a>{text}</a>,
        responsive: ['xs', 'sm', 'md'],
    },
    {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
        responsive: ['xs', 'sm', 'md'],
    },
    {
        title: "FATHER'S NAME",
        dataIndex: 'fatherNames',
        key: 'fatherNames',
        responsive: ['xs', 'sm', 'md'],
    },
    {
        title: 'SERVICE',
        dataIndex: 'service',
        key: 'service',
        responsive: ['xs', 'sm', 'md'],
    },
    {
        title: 'SELECTION YEAR',
        key: 'selectionYear',
        dataIndex: 'selectionYear',
        responsive: ['xs', 'sm', 'md'],
    },
];

const data1 = [
    {
        key: '1',
        name: 'Veeraram',
        fatherNames: 'Gunesharam',
        service: '-',
        selectionYear: '2023',
    },
];

const data2 = [
    {
        key: '1',
        name: 'Daksh Gour',
        fatherNames: 'Rekharam Gour',
        service: '-',
        selectionYear: '2025',
    },
];

const Achievements = () => {
    return (
        <>
            <div>
                <div>
                    <CommonCardHeadingSection title="Fee Structure" />
                </div>
                <div className='container m-auto p-4'>
                    <CommonButton title="NEET" className="text-xl md:text-3xl mb-10 Roboto-Bold px-4" justify="start" />
                    <hr className='py-4 w-[150px]' />

                    <Table
                        columns={columns}
                        dataSource={data1}
                        scroll={{ x: 'max-content' }}
                        bordered
                        responsive
                    />
                </div>
                <div className='container m-auto p-4'>
                    <CommonButton title="navodaya vidyalaya" className="text-xl md:text-3xl mb-10 Roboto-Bold uppercase px-4" justify="start" />
                    <hr className='py-4 w-[150px]' />

                    <Table
                        columns={columns}
                        dataSource={data2}
                        scroll={{ x: 'max-content' }}
                        bordered
                        responsive
                    />
                </div>
            </div>
        </>
    );
}

export default Achievements;