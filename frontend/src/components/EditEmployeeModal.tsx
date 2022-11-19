import { Button, Modal, Form, Input } from "antd";
import React, { useState, useContext } from "react";
import { EditOutlined } from "@ant-design/icons";
import { AppContext, AppContextType } from "../contexts/AppContext";
import { EmployeeType } from "../types";

const EditEmployeeModal: React.FC<{ record: EmployeeType }> = ({ record }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const {
    state: { employees },
    setState,
  } = useContext(AppContext) as AppContextType;

  const updateEmployee = (employee: EmployeeType) => {
    setState({
      employees: employees.map((emp) => {
        if (emp._id === employee._id) {
          emp = employee;
        }
        return emp;
      }),
    });
    closeModal();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const onFinish = (values: any) => {
    const newEmp = {
      ...record,
      ...values,
    };

    updateEmployee(newEmp);
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
            name: record.full_name,
            login: record.login,
            salary: record.salary,
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
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            label="Login"
            name="login"
            rules={[{ required: true, message: "Please input login!" }]}
          >
            <Input placeholder="Login" />
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
