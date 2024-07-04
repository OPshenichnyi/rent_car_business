import Link from 'next/link';
import Login from '../Login/Login';
import Logo from '../Logo/Logo';
import Menu_nav from '../MenuNav/Menu_nav';
import SwitchLang from '../SwitcherLang/SwitchLang';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <Menu_nav />
      <div>
        <SwitchLang />
      </div>
      <Login />
    </div>
  );
};

export default Header;
