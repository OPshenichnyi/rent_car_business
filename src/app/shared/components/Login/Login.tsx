'use client';
import style from './login.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import LoginForm from '../AuthForm/LoginForms/LoginForm';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <span className={style.login} onClick={() => setShowModal(true)}>
        Login
      </span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
};

export default Login;
