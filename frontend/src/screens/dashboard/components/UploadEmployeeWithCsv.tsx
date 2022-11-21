import { Button, Modal } from 'antd';
import { useState, FC } from 'react';
import {
    UploadOutlined,
  } from "@ant-design/icons";
import UploadFileCSV from '../../../components/UploadView/UploadFileCSV';

const UploadEmplyeeWithCsv: FC = () => {
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
    <div>
      <Button type="primary" onClick={showModal} icon={<UploadOutlined />} >
        Upload Emplyee 
      </Button>
      <Modal title="Upload Emplyee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <UploadFileCSV isModalVisible={isModalVisible} closeModel={() => setIsModalVisible(false)} />
      </Modal>
    </div>
  );
};

export default UploadEmplyeeWithCsv;