import { Button, Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";

const EditEmployeeModal: React.FC<{ record: any }> = ({ record: {name, salary, login} }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.submit()
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields()
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="text" size="small" onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title="Edit Employee Data"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ 
            name,
            login,
            salary
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
            <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name!" }]}
          >
            <Input placeholder="Name"/>
          </Form.Item>
          <Form.Item
            label="Login"
            name="login"
            rules={[{ required: true, message: "Please input login!" }]}
          >
            <Input placeholder="Login"/>
          </Form.Item>
          <Form.Item
            label="Salary"
            name="salary"
            rules={[{ required: true, message: "Please input salary!" }]}
          >
            <Input placeholder="Salary" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditEmployeeModal;
