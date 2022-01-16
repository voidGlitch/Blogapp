import { useState } from "react";
import { Avatar, Loader, Message, toaster, Uploader } from "rsuite";

function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const styles = {
  width: 150,
  height: 150,
};

const PicAvatar = () => {
  const [uploading, setUploading] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);

  return (
    <Uploader
      fileListVisible={false}
      listType="picture"
      action=""
      onUpload={(file) => {
        setUploading(true);
        previewFile(file.blobFile, (value) => {
          setFileInfo(value);
        });
      }}
      onSuccess={() => {
        setUploading(false);
        toaster.push(<Message type="success">Uploaded successfully</Message>);
      }}
      onError={() => {
        setFileInfo(null);
        setUploading(false);
        toaster.push(<Message type="error">Upload failed</Message>);
      }}
    >
      <button style={styles}>
        {uploading && <Loader backdrop center />}
        {fileInfo ? (
          <img src={fileInfo} width="100%" height="100%" alt="hello" />
        ) : (
          <Avatar style={{ fontSize: 80 }} />
        )}
      </button>
    </Uploader>
  );
};

export default PicAvatar;
