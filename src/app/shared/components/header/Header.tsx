import Login from '../Login/Login';
import Menu_nav from '../MenuNav/Menu_nav';
import styles from './header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <span className={styles.logo_title}>
          <span className={styles.txt}>BCR</span>entall
        </span>
      </div>
      <Menu_nav />
      <Login />
    </div>
  );
};

export default Header;
