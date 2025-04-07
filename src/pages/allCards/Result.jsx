// import React from 'react'
// import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection'
// import CommonButton from '../../components/common/CommonButton'

// const Result = () => {
//     return (
//         <>
//             <div>
//                 <div>
//                     <CommonCardHeadingSection title="Result" />
//                 </div>
//                 <div className='flex container m-auto py-[40px]'>
//                     <div className='container m-auto p-4 '>
//                         <CommonButton title="Secondary (10th)" className="text-xl md:text-3xl capitalize Roboto-Bold px-4" />
//                         <hr className='w-[100px] py-4 mt-5  font-bold  '/>
//                         <CommonButton title="2023" className="text-xl md:text-3xl capitalize Roboto-Bold px-4" />
//                         <div className='px-4'>
//                             <ul>
//                                 <li className='list-disc'>Sawrup Sharma  ( 93.67% ) </li>
//                                 <li className='list-disc'>Ramchandra Jakhar  ( 91.00% ) </li>
//                                 <li className='list-disc'>Pawan Choudhary ( 88.83% ) </li>
//                                 <li className='list-disc'>Vimla Choudhary (c)  ( 85.33% ) </li>
//                                 <li className='list-disc'>ChandraPrakash Nehra  ( 83.30% ) </li>
//                                 <li className='list-disc'>Geeta Choudhary  ( 82.83% ) </li>
//                                 <li className='list-disc'>Harish Saran ( 82.83% ) </li> 
//                                 <li className='list-disc'>Kanwaraj virda ( 82.50% ) </li>
//                                 <li className='list-disc'>Ramesh Saran  ( 82.17% ) </li>
//                                 <li className='list-disc'>ChandraPrakash Nehra  ( 83.30% ) </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Result

import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
import CommonButton from '../../components/common/CommonButton';
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
    responsive: ['xs', 'sm', 'md'], 
  },
  {
    title: "Father's Name",
    dataIndex: 'fatherName',
    key: 'fatherName',
    responsive: ['xs', 'sm', 'md'],
  },
  {
    title: 'Percentage (%)',
    dataIndex: 'percentage',
    key: 'percentage',
    responsive: ['xs', 'sm', 'md'],
  },
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description',
    // render: (_, { totalPerAnnum }) => (
    //   <>
    //     <Tag color="green">{totalPerAnnum}</Tag>
    //   </>
    // ),
    responsive: ['xs', 'sm', 'md'],
  },
];

const data = [
  {
    key: 'name',
    name: 'Sawrup Sharma',
    fatherName: '-',
    percentage: '93.67 %',
    description: '-',
  },
  {
    key: 'name',
    name: 'Ramchandra Jakhar',
    fatherName: '-',
    percentage: '91.00 %',
    description: '-',
  },
  {
    key: 'name',
    name: 'Pawan Choudhary',
    fatherName: '-',
    percentage: '88.83 %',
    description: '-',
  },
  {
    key: 'name',
    name: 'Vimla Choudhary (c)',
    fatherName: '-',
    percentage: '85.43%',
    description: '-',
  },
  {
    key: 'name',
    name: 'ChandraPrakash Nehra',
    fatherName: '-',
    percentage: '83.30 %',
    description: '-',
  },
  {
    key: 'name',
    name: 'Geeta Choudhary',
    fatherName: '-',
    percentage: '82.83 %',
    description: '-',
  },
  {
    key: 'name',
    name: 'Harish Saran',
    fatherName: '-',
    percentage: '82.83 %',
    description: '-',
  },
  {
    key: 'name',
    name: 'Kanwaraj virda',
    fatherName: '-',
    percentage: '82.50 %',
    description: '-',
  },{
    key: 'name',
    name: 'Ramesh Saran',
    fatherName: '-',
    percentage: '82.17 %',
    description: '-',
  },{
    key: 'name',
    name: 'ChandraPrakash Nehra',
    fatherName: '-',
    percentage: '81.30 %',
    description: '-',
  }
];

const Result = () => {
  return (
    <>
      <div>
        <CommonCardHeadingSection title="Result" />
      </div>
      <div className='container m-auto p-4'>
        <CommonButton title="Secondary (10th)" className="text-xl md:text-3xl mb-10 Roboto-Bold px-4" justify="center" />
        <hr className='w-[100px] py-4 mt-5  font-bold  '/>
        <CommonButton title="2023" className="text-xl md:text-3xl capitalize Roboto-Bold px-4" />
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

export default Result;
