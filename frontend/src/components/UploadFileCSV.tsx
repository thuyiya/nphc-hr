import React, { useState } from "react";
import {
  LoadingOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { message, Space, Upload, Button, Tooltip } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const MAX_LENGTH = 28;

const getBase64 = (file: RcFile, callback: () => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback());
  reader.readAsDataURL(file);
};

const beforeUpload = (file: RcFile) => {
  console.log(file.type);
  const isCsv = file.type === "text/csv";
  if (!isCsv) {
    message.error("You can only upload csv file!");
  }

  console.log("file.size ", file.size)

  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("CSV must smaller than 2MB!");
  }
  return isCsv && isLt2M;
};

const UploadFileCSV: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, () => {
        setLoading(false);
        setFileList((prevState) => [...prevState, info.file]);
      });
    }
  };

  const uploadButton = (
    <Button>
      {loading ? <LoadingOutlined /> : <UploadOutlined />} Click to Upload CSV Attachments
    </Button>
  );

  const dummyRequest = async (options: any) => {
    const { onSuccess, onError } = options;
    try {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    } catch (error) {
      onError("Error");
    }
  };

  const createShortName = (name: string): string => {
    return name.substring(0, MAX_LENGTH) + "...";
  };

  const removeCsvFromList = (file: UploadFile) => {
    setFileList((prevState) => prevState.filter(data => data.uid !== file.uid));
  }

  return (
    <Space direction="vertical">
      <Upload
        name="avatar"
        className="avatar-uploader"
        showUploadList={false}
        multiple={true}
        customRequest={dummyRequest}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {uploadButton}
      </Upload>
      {fileList.map((file, i) => (
        <Space key={i} size={2}>
          <Tooltip title={file.name}>
            <span className="file-name">{createShortName(file.name)}</span>
          </Tooltip>
          <Button type="text" danger size="small" onClick={() => removeCsvFromList(file)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ))}
    </Space>
  );
};

export default UploadFileCSV;
