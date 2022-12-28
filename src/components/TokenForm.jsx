import React from 'react'
import { Button, Form, Input, InputNumber, Tabs, Divider } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;



const TokenForm = () => {

    const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const isTooYoung = (value) => {
    console.log(`Validate ${value}`);
    if (value < 5) {
      return Promise.reject('Age needs to be 5 or older.');
    }
    return Promise.resolve();
  };

  const getDate = () => {
    
  }

  return (
    <>
    <Title>Enter Credentials</Title>
    <Divider/>
    <Form onFinish={onFinish} name="userForm" layout='horizonal' colon={true} form={form}
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 16,
    }} 
    initialValues={{
        granttype: 'password'
    }}
    >
    <Form.Item label="Grant Type" name="granttype">
      <Input name="granttype" disabled={true} />
      </Form.Item>

      <Form.Item label="Username" name="username" 
      rules={[
          {
            required: true,
            message: 'The username is required.',
          }
        ]}>
      <Input name="username" />
      </Form.Item>

      <Form.Item label="Password" name="password" 
      rules={[
          {
            required: true,
            message: 'The password is required.',
          }
        ]}>
      <Input name="password" />
      </Form.Item>

      <Form.Item label="Scope" name="scope" 
      rules={[
          {
            required: true,
            message: 'The scopes is required.',
          }
        ]}>
      <Input name="scope" />
      </Form.Item>

      <Form.Item label="Client ID" name="clientid" 
      rules={[
          {
            required: true,
            message: 'The client ID is required.',
          }
        ]}>
      <Input name="clientid" />
      </Form.Item>

      <Form.Item label="Client Secret" name="clientsecret" 
      rules={[
          {
            required: true,
            message: 'The cliend secret is required.',
          }
        ]}>
      <Input name="clientsecret" />
      </Form.Item>
      
      <Form.Item wrapperCol={{
          offset: 4,
          span: 16,
        }}>
      <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default TokenForm