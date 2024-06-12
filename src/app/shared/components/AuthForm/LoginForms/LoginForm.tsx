import styles from './loginForm.module.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import React from 'react';
import Email from '../../icons/Email';
import Password from '../../icons/Password';
import Link from 'next/link';

interface Values {
  password: string;
  email: string;
}

const LoginForm = () => {
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
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className={styles.form_input}>
          <div className={styles.wrap_field}>
            <Field
              className={styles.input_field}
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Email />
          </div>
          <div className={styles.wrap_field}>
            <Field
              className={styles.input_field}
              id="password"
              name="password"
              placeholder="Password"
            />
            <Password />
          </div>
          <div className={styles.contain_button}>
            <Link href="/" className={styles.link_recover}>
              Recover password
            </Link>
            <button className={styles.btn_submit} type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
