'use client';
import React from 'react';
import Facebook from '../../components/icons/Facebook';
import Google from '../../components/icons/Google';
import styles from './googlefacebook.module.css';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const CoogleFacebook = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleGoogle = async () => {
    signIn('google', { callbackUrl });
  };

  return (
    <>
      <div>
        <span className={styles.title_sing_other}>or sign it with</span>
      </div>
      <div className={styles.contain_icon}>
        <div
          onClick={() => {
            console.log('Register to facebook');
          }}
        >
          <Facebook className={styles.icon} />
        </div>
        <div
          onClick={() => {
            handleGoogle();
          }}
        >
          <Google className={styles.icon} />
        </div>
      </div>
    </>
  );
};

export default CoogleFacebook;
