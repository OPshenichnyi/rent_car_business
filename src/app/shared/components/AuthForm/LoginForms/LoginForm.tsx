'use client';
import styles from './loginForm.module.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import Email from '../../icons/Email';
import Password from '../../icons/Password';
import Link from 'next/link';
import Facebook from '../../icons/Facebook';
import Google from '../../icons/Google';

interface Values {
  password: string;
  email: string;
  сonfirmPassword: string;
}

const LoginForm = () => {
  const [isLogin, setLogin] = useState(true);
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isOpenConfirmPass, setIsOpenConfirmPass] = useState(false);

  const togleViewPassword = (id: string) => {
    if (id === 'password') {
      if (isOpenPassword) {
        setIsOpenPassword(false);
      } else {
        setIsOpenPassword(true);
      }
    }
    if (id === 'confirm') {
      if (isOpenConfirmPass) {
        setIsOpenConfirmPass(false);
      } else {
        setIsOpenConfirmPass(true);
      }
    }
  };

  return (
    <div className={styles.container_form}>
      <div className={styles.wrap_title_form}>
        <h2 className={styles.title_login}>Welcome</h2>
        <span className={styles.title_descript}>
          Enter your details to proceed further
        </span>
      </div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          сonfirmPassword: '',
        }}
        onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
          console.log(values);
          resetForm();
        }}
      >
        <Form className={styles.form_input}>
          <ul className={styles.list_input}>
            <li className={styles.wrap_field}>
              <Field
                className={styles.input_field}
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Email />
            </li>
            <li className={styles.wrap_field}>
              <Field
                className={styles.input_field}
                id="password"
                name="password"
                placeholder="Password"
                type={isOpenPassword ? 'text' : 'password'}
              />
              <div
                onClick={() => {
                  togleViewPassword('password');
                }}
              >
                <Password />
              </div>
            </li>
            {!isLogin && (
              <li className={styles.wrap_field}>
                <Field
                  className={styles.input_field}
                  id="сonfirmPassword"
                  name="сonfirmPassword"
                  placeholder="Confirm password"
                  type={isOpenConfirmPass ? 'text' : 'password'}
                />
                <div
                  onClick={() => {
                    togleViewPassword('confirm');
                  }}
                >
                  <Password />
                </div>
              </li>
            )}
          </ul>

          <div className={styles.contain_button}>
            <Link href="/" className={styles.link_recover}>
              {isLogin && 'Recover password'}
            </Link>
            <button className={styles.btn_submit} type="submit">
              Submit
            </button>
          </div>
          <div className={styles.contain_sing_other}>
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
                  console.log('Register to google');
                }}
              >
                <Google className={styles.icon} />
              </div>
            </div>
            <span className={styles.title_sing_other}>
              {!isLogin ? 'Already have an account?' : 'Don’t have an account?'}
              {isLogin ? (
                <button
                  type="button"
                  onClick={() => {
                    setLogin(false);
                  }}
                  className={styles.link_sing_up}
                >
                  Sing up
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setLogin(true);
                  }}
                  className={styles.link_sing_up}
                >
                  Sing in
                </button>
              )}
            </span>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
