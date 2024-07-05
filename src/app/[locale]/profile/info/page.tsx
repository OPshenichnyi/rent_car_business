import React, { ReactElement } from 'react';
import styles from './page.module.css';
import Upload from '@/app/shared/components/icons/Upload';
import UploadFoto from '@/app/shared/components/UploadFoto/UploadFoto';

const Info = (): ReactElement => {
  return (
    <div>
      <h2 className={styles.title}>Add your personal info</h2>
      <div>
        <h3 className={styles.sub_title}>Driver's License</h3>
        <div className={styles.wrap_foto_document}>
          <UploadFoto />
          <UploadFoto />
        </div>
      </div>
    </div>
  );
};

export default Info;
