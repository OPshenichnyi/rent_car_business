import React from 'react';
import styles from './errorFields.module.css';

type MyComponentProps = {
  errorProps?: string;
};

const ErrorFields: React.FC<MyComponentProps> = ({ errorProps }) => {
  if (errorProps) {
    return <div className={styles.wrap_errors}>{errorProps}</div>;
  }
  return null;
};

export default ErrorFields;
