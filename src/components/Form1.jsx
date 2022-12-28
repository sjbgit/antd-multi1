import React from 'react'
import { Button, Form, Input, InputNumber, Tabs } from 'antd';

const Form1 = () => {

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

  return (
    <Form onFinish={onFinish} name="userForm" layout='horizonal' colon={false} labelAlign="left" form={form}
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 16,
    }} 
    initialValues={{
      name: 'John1',
      age: 8,
    }}
    >
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
      <Form.Item label="Age" name="age" requiredMark="optional" validateFirst={true} validateTrigger="onBlur" 
      rules={[
        {
          type: 'integer',
          min: 0,
          max: 200,
          message: 'Please input a valid age.',
        },
        () => ({
          validator(_, value) {
            console.log(_) 
            return isTooYoung(value);
          },
        })
        // {
        //   validator: (_, value) => isTooYoung(value)
        // }
        /////////
      //   {
      //     type: 'integer',
      //     min: 5,
      //     max: 200,
      //     message: 'Age needs to be 5 or older.',
      //   }
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
      {/* <Button onClick={() => form.setFieldsValue({ age: 7 })}>Set Age</Button> */}
    </Form>
    
  )
}

export default Form1