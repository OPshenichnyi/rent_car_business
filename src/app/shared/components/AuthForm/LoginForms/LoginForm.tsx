'use client';
import styles from './loginForm.module.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import Email from '../../icons/Email';
import Password from '../../icons/Password';
import Link from 'next/link';
import GoogleFacebook from '../../CoogleFacebook/CoogleFacebook';
import { signIn } from 'next-auth/react';
import * as Yup from 'yup';
import ErrorFields from '../../ErrorFields/ErrorFields';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import en from '@/../messages/en.json';
import ua from '@/../messages/ua.json';

interface Values {
  password: string;
  email: string;
  сonfirmPassword: string;
}

interface CloseModalProps {
  closeModal: () => void;
}

const LoginForm: React.FC<CloseModalProps> = ({ closeModal }) => {
  const [isLogin, setLogin] = useState(true);
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isOpenConfirmPass, setIsOpenConfirmPass] = useState(false);
  const baseUrl = window.location.origin;
  const router = useRouter();
  const locale = useLocale();

  // Function to show or hide the password
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

  // Function to authenticate a user
  const authUser = async (values: Values) => {
    const { email, password, сonfirmPassword } = values;
    if (isLogin) {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (result && result.ok) {
        closeModal();
        router.push(`${baseUrl}/${locale}/profile`);
      } else {
        console.log('error', result);
      }
    } else {
      if (password === сonfirmPassword) {
        try {
          const resulRegister = await fetch(`${baseUrl}/api/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
          if (resulRegister && resulRegister.ok) {
            closeModal();
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  // Validation schema registration form
  const registrValidSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required email address'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required password'),
    сonfirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('password'), undefined],
        'Password and confirm password must match'
      )
      .required('Required confirm password'),
  });

  // Validation schema login form
  const loginValidSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required email address'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required password'),
  });

  return (
    <div className={styles.container_form}>
      <div className={styles.wrap_title_form}>
        <h2 className={styles.title_login}>
          {locale === 'en' ? en.modal_menu.title : ua.modal_menu.title}
        </h2>
        <span className={styles.title_descript}>
          {locale === 'en'
            ? en.modal_menu.description
            : ua.modal_menu.description}
        </span>
      </div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          сonfirmPassword: '',
        }}
        validationSchema={isLogin ? loginValidSchema : registrValidSchema}
        onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
          authUser(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form_input}>
            <ul className={styles.list_input}>
              <li
                className={
                  errors.email && touched.email
                    ? styles.wrap_field_error
                    : styles.wrap_field
                }
              >
                <Field
                  className={styles.input_field}
                  name="email"
                  placeholder="Email"
                />
                <Email />
                <ErrorFields errorProps={errors.email} />
              </li>
              <li
                className={
                  errors.password && touched.password
                    ? styles.wrap_field_error
                    : styles.wrap_field
                }
              >
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
                <ErrorFields errorProps={errors.password} />
              </li>
              {!isLogin && (
                <li
                  className={
                    errors.сonfirmPassword && touched.сonfirmPassword
                      ? styles.wrap_field_error
                      : styles.wrap_field
                  }
                >
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
                  <ErrorFields errorProps={errors.сonfirmPassword} />
                </li>
              )}
            </ul>

            <div className={styles.contain_button}>
              <Link href="/" className={styles.link_recover}>
                {isLogin &&
                  `${
                    locale === 'en'
                      ? en.modal_menu.recovery
                      : ua.modal_menu.recovery
                  }`}
              </Link>
              <button className={styles.btn_submit} type="submit">
                {locale === 'en' ? en.modal_menu.submit : ua.modal_menu.submit}
              </button>
            </div>

            <div className={styles.contain_sing_other}>
              <GoogleFacebook />
              <span className={styles.title_sing_other}>
                {!isLogin
                  ? 'Already have an account?'
                  : 'Don’t have an account?'}
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
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
