import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
import CommonButton from '../../components/common/CommonButton';
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection';

const columns = [
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'class',
    render: text => <a>{text}</a>,
    responsive: ['xs', 'sm', 'md'], 
  },
  {
    title: 'Installment',
    dataIndex: 'installment',
    key: 'installment',
    responsive: ['xs', 'sm', 'md'],
  },
  {
    title: 'Tie & Belt',
    dataIndex: 'tieBelt',
    key: 'tieBelt',
    responsive: ['xs', 'sm', 'md'],
  },
  {
    title: 'Total (Per Annum)',
    key: 'totalPerAnnum',
    dataIndex: 'totalPerAnnum',
    render: (_, { totalPerAnnum }) => (
      <>
        <Tag color="green">{totalPerAnnum}</Tag>
      </>
    ),
    responsive: ['xs', 'sm', 'md'],
  },
];

const data = [
  {
    key: 'lkgUkg',
    class: 'L.K.G./ U.K.G.',
    installment: '-',
    tieBelt: '₹100',
    totalPerAnnum: '-',
  },
  {
    key: 'firsttoThird',
    class: 'I to III',
    installment: '-',
    tieBelt: '₹100',
    totalPerAnnum: '-',
  },
  {
    key: 'forthToSifth',
    class: 'IV to V',
    installment: '-',
    tieBelt: '₹100',
    totalPerAnnum: '-',
  },
  {
    key: 'sixthToEight',
    class: 'VI to VIII',
    installment: '-',
    tieBelt: '₹100',
    totalPerAnnum: '-',
  },
  {
    key: 'ninethToTenth',
    class: 'IX to X',
    installment: '-',
    tieBelt: '₹100',
    totalPerAnnum: '-',
  },
];

const FeeStructure = () => {
  return (
    <>
      <div>
        <CommonCardHeadingSection title="Fee Structure" />
      </div>
      <div className='container m-auto p-4'>
        <CommonButton title="Fee Structure 2025-26" className="text-xl md:text-3xl mb-10 Roboto-Bold" justify="center" />
        
        <Table 
          columns={columns} 
          dataSource={data} 
          scroll={{ x: 'max-content' }}
          bordered
          responsive 
          style={{display:Flex, justifyContent:'center', alignItems:'center'}}
        />
      </div>
    </>
  );
}

export default FeeStructure;
