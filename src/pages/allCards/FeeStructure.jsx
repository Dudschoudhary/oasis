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
    responsive: ['xs', 'sm', 'md'], // Make column visible on these breakpoints
  },
  {
    title: 'Installment',
    dataIndex: 'installment',
    key: 'installment',
    responsive: ['xs', 'sm', 'md'], // This column will only be visible on sm and md screens
  },
  {
    title: 'Tie & Belt',
    dataIndex: 'tieBelt',
    key: 'tieBelt',
    responsive: ['xs', 'sm', 'md'], // Visible only on small screens and above
  },
  {
    title: 'Total (Per Annum)',
    key: 'totalPerAnnum',
    dataIndex: 'totalPerAnnum',
    render: (_, { totalPerAnnum }) => (
      <>
        <Tag color="green">{totalPerAnnum}</Tag> {/* Example of displaying totalPerAnnum in a tag */}
      </>
    ),
    responsive: ['xs', 'sm', 'md'],
  },
];

const data = [
  {
    key: '1',
    class: 'Class 1',
    installment: '-',
    tieBelt: 'Included',
    totalPerAnnum: '₹30,000',
  },
  {
    key: '2',
    class: 'Class 2',
    installment: '4 Installments',
    tieBelt: 'Not Included',
    totalPerAnnum: '₹40,000',
  },
  {
    key: '3',
    class: 'Class 3',
    installment: '5 Installments',
    tieBelt: 'Included',
    totalPerAnnum: '₹50,000',
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
        
        {/* Add responsive and scroll prop to the Table component */}
        <Table 
          columns={columns} 
          dataSource={data} 
          scroll={{ x: 'max-content' }} // Ensures horizontal scrolling when necessary
          bordered
          responsive 
          style={{display:Flex, justifyContent:'center', alignItems:'center'}}
        />
      </div>
    </>
  );
}

export default FeeStructure;
