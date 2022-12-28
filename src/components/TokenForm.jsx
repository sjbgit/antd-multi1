import React from 'react'
import { Button, Form, Input, InputNumber, Tabs, Divider, Select, message } from 'antd';

import { Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const { Title } = Typography;
const { Option } = Select;

const callApi = ({ username, password, scope, client_id, client_secret, url, success, error }) => {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("scope", scope);
    urlencoded.append("client_id", client_id);
    urlencoded.append("client_secret", client_secret);

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: urlencoded,
        redirect: 'follow'
    };
    
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => { 
          console.log(result);
          success();
        })
        .catch(err => {
          console.log('error', err);
          error(); 
        });
}

const TokenForm = () => {

  const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'This is a success message',
      });
    };

    const error = () => {
      messageApi.open({
        type: 'error',
        content: 'This is an error message',
      })
    };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    callApi({...values, success, error});
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
    {contextHolder}
    <Title>Enter Credentials</Title>
    <Divider/>
    <Form onFinish={onFinish} name="tokenForm" layout='horizonal' colon={true} form={form}
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 16,
    }} 
    initialValues={{
        granttype: 'password',
        url: 'option1'
    }}
    >
      <Form.Item label="URL" name="url">
      <Select>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </Form.Item>
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

      <Form.Item label="Client ID" name="client_id" 
      rules={[
          {
            required: true,
            message: 'The client ID is required.',
          }
        ]}>
      <Input name="client_id" />
      </Form.Item>

      <Form.Item label="Client Secret" name="client_secret" 
      rules={[
          {
            required: true,
            message: 'The client secret is required.',
          }
        ]}>
      <Input.Password name="client_secret" />
      </Form.Item>
      
      <Form.Item wrapperCol={{
          offset: 4,
          span: 16,
        }}>
      <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
      <Divider/>
      <Form.Item label="Token" name="token">
        <TextArea name='token' rows={10}  disabled={true}/>
      </Form.Item>
    </Form>
    </>
  )
}

export default TokenForm