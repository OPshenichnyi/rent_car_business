import style from './menu_nav.module.css';
import Link from 'next/link';
const Menu_nav = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li>
          <Link className={style.link} href="/">
            Become a renter
          </Link>
        </li>
        <li>
          <Link className={style.link} href="/">
            Rental detals
          </Link>
        </li>
        <li>
          <Link className={style.link} href="/">
            How it work?
          </Link>
        </li>
        <li>
          <Link className={style.link} href="/">
            Why choose us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu_nav;
