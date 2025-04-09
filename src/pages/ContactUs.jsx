import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import CommonButton from '../components/common/CommonButton';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const ContactUs = () => {
    // Create the form instance using Form.useForm()
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);

        // Reset form after successful submission
        form.resetFields();
    };

    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23834.825725302228!2d71.1829446392735!3d25.292173872166256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3945aca68f46cead%3A0x74a436227cfd012a!2sOASIS%20Star%20Academy%20Bisarniya!5e0!3m2!1sen!2sin!4v1744191837909!5m2!1sen!2sin"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-[60vh]"
                allowfullscreen=""
            ></iframe>

            <div className="container m-auto my-[70px] p-4 flex justify-center flex-col md:flex-row md:grid-cols-2 gap-x-10">
                <div className="w-full md:w-[65%]">
                    <div className="container m-auto">
                        <CommonButton title="CONTACT FORM" className="text-xl mb-10 Roboto-Bold" justify="start" />
                    </div >
                    <Form
                        {...layout}
                        form={form} // Attach the form instance to the form component
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{ maxWidth: 600 }}
                        validateMessages={validateMessages}
                    >
                        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                            <Input placeholder="Enter your full name" />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                            <Input placeholder="Enter your email address" />
                        </Form.Item>
                        <Form.Item name={['user', 'website']} label="Website">
                            <Input placeholder="Enter your website URL" />
                        </Form.Item>
                        <Form.Item name={['user', 'introduction']} label="Introduction" rules={[{ required: true }]}>
                            <Input.TextArea placeholder="Write a short introduction about yourself" />
                        </Form.Item>
                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="w-full md:w-[30%]">
                    <div className="container m-auto">
                        <CommonButton title="OFFICE" className="text-xl mb-10 Roboto-Bold" justify="start" />
                    </div >
                    <p>9672987280 <span className="font-bold">(Nepal Singh Sankara)</span></p>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
