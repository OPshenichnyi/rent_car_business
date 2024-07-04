'use client';
import style from './login.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import LoginForm from '../AuthForm/LoginForms/LoginForm';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import React from 'react';
import Logout from '../icons/Logout';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const session = useSession();
  const locale = useLocale();

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div>
      {!session?.data ? (
        <span className={style.login} onClick={() => setShowModal(true)}>
          Login
        </span>
      ) : (
        <div className={style.wrap_link}>
          <Link className={style.login} href={`/${locale}/profile`}>
            {locale === 'en' ? 'My Account' : 'Мій Кабінет'}
          </Link>
          <Link
            className={style.logout}
            href="#"
            onClick={() => {
              signOut();
            }}
          >
            <Logout />
          </Link>
        </div>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Login;
