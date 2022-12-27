import React from 'react'
import { Button, Form, Input, Tabs } from 'antd';

const Form1 = () => {
  return (
    <Form name="userForm" layout='horizonal' colon={false}
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 16,
    }} >
      <Form.Item label="Name" name="name">
      <Input name="name" />
      </Form.Item>
      <Form.Item label="Age" name="age">
      <Input age="age" />
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