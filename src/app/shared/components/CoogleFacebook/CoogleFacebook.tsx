'use client';
import React from 'react';
import Facebook from '../../components/icons/Facebook';
import Google from '../../components/icons/Google';
import styles from './googlefacebook.module.css';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import en from '@/../messages/en.json';
import ua from '@/../messages/ua.json';
import { useLocale } from 'next-intl';

const CoogleFacebook = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const locale = useLocale();

  const handleGoogle = async () => {
    signIn('google', { callbackUrl });
  };

  return (
    <>
      <div>
        <span className={styles.title_sing_other}>
          {' '}
          {locale === 'en' ? en.modal_menu.sign_up : ua.modal_menu.sign_up}
        </span>
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
