import global from '../../../[locale]/global.module.css';
import Logo from '../Logo/Logo';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={global.section}>
      <div className={styles.section}>
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
