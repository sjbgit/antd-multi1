import React from 'react'
import { Button, Form, Input, InputNumber, Tabs } from 'antd';

const Form1 = () => {
  return (
    <Form name="userForm" layout='horizonal' colon={false} labelAlign="left" 
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 16,
    }} >
      <Form.Item label="Name" name="name" 
      rules={[
          {
            required: true,
            message: 'The name is required.',
          },
          {
            pattern: /^[a-zA-Z0-9]+$/,
            message: 'Name can only include letters and numbers.',
          },
        ]}>
      <Input name="name" />
      </Form.Item>
      <Form.Item label="Age" name="age" requiredMark="optional" validateFirst={true}
      rules={[
        {
          type: 'integer',
          min: 0,
          max: 200,
          message: 'Please input a valid age.',
        },
        {
          type: 'integer',
          min: 5,
          max: 200,
          message: 'Age needs to be 5 or older.',
        }
      ]}>
      <InputNumber age="age" />
      </Form.Item>
      <Form.Item wrapperCol={{
          offset: 4,
          span: 16,
        }}>
      <Button htmlType="submit">Submit</Button>
      </Form.Item>
      
      {/* <Button type="primary">Button</Button> */}
    </Form>
  )
}

export default Form1