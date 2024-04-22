import Link from 'next/link';
import style from './login.module.css';
const Login = () => {
  return (
    <div>
      <Link className={style.login} href="/login">
        Login
      </Link>
    </div>
  );
};

export default Login;
