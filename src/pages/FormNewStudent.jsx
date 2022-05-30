import React from 'react'
import '../css/form.css';
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
function FormNewStudent() {
  return (
    <div>
      <div className="App">
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="studentId"
            label="Student Id"
            rules={[
              {
                required: true,
                message: "Please enter your studentId",
               
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your studentId" />
          </Form.Item>

          <Form.Item
            name="Name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your Name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your Name" />
          </Form.Item>

          <Form.Item
            name="PlaceOfBirth"
            label="PlaceOfBirth"
            rules={[
              {
                required: true,
                message: "Please enter your PlaceOfBirth",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your PlaceOfBirth" />
          </Form.Item>

         

          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="BirthDay"
            label="BirtDay"
            rules={[
              {
                required: true,
                message: "Please provide your place of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

          <Form.Item
            name="department"
            label="Department"
            rules={[
              {
                required: true,
                message: "Please enter your department",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your department" />
          </Form.Item>

        

          <Form.Item  wrapperCol={{ span: 24 }}>
            <Button block style={{margin:"8px"}} type="primary" htmlType="submit">
              Submit
            </Button>
            <Button block style={{margin:"8px"}} type="button" >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
    </div>
  )
}

export default FormNewStudent