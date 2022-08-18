import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import {
    UploadOutlined,
  } from "@ant-design/icons";

const UploadEmplyeeWithCsv: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<UploadOutlined />} >
        Upload Emplyee 
      </Button>
      <Modal title="Upload Emplyee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        Upload file view
      </Modal>
    </>
  );
};

export default UploadEmplyeeWithCsv;