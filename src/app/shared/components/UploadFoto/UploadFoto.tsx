import React from 'react';
import Upload from '../icons/Upload';
import styles from './upload.module.css';

const UploadFoto = () => {
  return (
    <div className={styles.wrap_selfi}>
      <div className={styles.wrap_foto_license}>
        <span className={styles.selfi}>Foto drive license</span>
        <div className={styles.upload_wrap}>
          <Upload />
          <span>Upload photo</span>
        </div>
      </div>
    </div>
  );
};

export default UploadFoto;
