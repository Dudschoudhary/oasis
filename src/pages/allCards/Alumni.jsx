import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Space, theme } from 'antd';
import CommonCardHeadingSection from '../../components/common/CommonCardHeadingSection';

const AdvancedSearchForm = () => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();

    const formStyle = {
        maxWidth: 'none',
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        padding: 24,
    };

    const getFields = () => {
        const fields = [
            { name: "Name of Student", placeholder: "Name of Student *" },
            { name: "Father's Name", placeholder: "Father's Name *" },
            { name: "Email ID", placeholder: "Email ID *" },
            { name: "Phone Mumber", placeholder: "Phone Number *" },
            { name: "Class when passed out school *", placeholder: "Class when passed out school *" },
            { name: "Year of passing out school *", placeholder: "Year of passing out school *" },
            { name: "Job/Designation", placeholder: "Job/Designation *" },
            { name: "Company/Organization", placeholder: "Company/Organization *" },
        ];

        return fields.map((field, index) => (
            <Col 
                xs={24}  // 100% width on small screens
                sm={24}  // 100% width on small screens
                md={12}  // 50% width on medium screens and up
                key={index} 
                className='flex justify-center items-center'
            >
                <Form.Item
                    name={`field-${index}`}
                    rules={[{ required: true, message: `Please Enter ${field.name}!` }]}
                >
                    <Input placeholder={field.placeholder} />
                </Form.Item>
            </Col>
        ));
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        form.resetFields(); // Clears the form after submit
    };

    return (
        <div className='container m-auto h-[100vh] mb-14 flex justify-center sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] items-center '>
            <Form
                form={form}
                name="advanced_search"
                style={formStyle}
                onFinish={onFinish}
                className='mb-10'
            >
                <div className='py-10 bg-[#d7b56d] p-4 lg:p-10 rounded-xl'>
                    <Row gutter={24} className='gap-y-5 lg:p-10 rounded-xl'>
                        {getFields()}
                    </Row>
                    <div style={{ textAlign: 'center' }}>
                        <Space size="small">
                            <Button type="primary" htmlType="submit" className='bg-[#00434c]'>
                                Submit
                            </Button>
                        </Space>
                    </div>
                </div>
            </Form>
        </div>
    );
};

const Alumni = () => {
    const { token } = theme.useToken();
    const listStyle = {
        lineHeight: '200px',
        textAlign: 'center',
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        marginTop: 16,
    };

    return (
        <>
            <div>
                <CommonCardHeadingSection title="Alumni" />
            </div>
            <div className="full-screen-container">
                <AdvancedSearchForm />
            </div>
        </>
    );
};

export default Alumni;
