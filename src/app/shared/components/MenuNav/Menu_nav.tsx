import { useTranslations } from 'next-intl';
import style from './menu_nav.module.css';
import Link from 'next/link';

const Menu_nav = () => {
  const t = useTranslations('Menu-nav');

  return (
    <nav>
      <ul className={style.list}>
        <li>
          <Link className={style.link} href="/">
            {t('About_crm')}
          </Link>
        </li>
        <li>
          <Link className={style.link} href="/">
            {t('Rent_car')}
          </Link>
        </li>
        <li>
          <Link className={style.link} href="/">
            {t('Rent_out_car')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu_nav;
