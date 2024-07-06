import styles from './whyList.module.css';
import Folder from '../icons/BestPrice';
import Experience from '../icons/Experience';
import BestPrice from '../icons/TwentyFour';
import TechnicalSupport from '../icons/TechnicalSupport';
import { useTranslations } from 'next-intl';

const WhyList = () => {
  const t = useTranslations('why_choose');
  return (
    <ul>
      <li className={styles.item_why}>
        <div className={styles.wrap_img}>
          <Folder />
        </div>
        <div>
          <h3 className={styles.title}>{t('price')}</h3>
          <span className={styles.descript}>{t('price_descript')}</span>
        </div>
      </li>
      <li className={styles.item_why}>
        <div className={styles.wrap_img}>
          <Experience />
        </div>
        <div>
          <h3 className={styles.title}>{t('Driver_dashboard')}</h3>
          <span className={styles.descript}>{t('Driver_descript')}</span>
        </div>
      </li>
      <li className={styles.item_why}>
        <div className={styles.wrap_img}>
          <TechnicalSupport />
        </div>
        <div>
          <h3 className={styles.title}>{t('Owners_dashboard')}</h3>
          <span className={styles.descript}>{t('Owners_descript')}</span>
        </div>
      </li>
      <li className={styles.item_why}>
        <div className={styles.wrap_img}>
          <BestPrice />
        </div>
        <div>
          <h3 className={styles.title}>{t('Access_24')}</h3>
          <span className={styles.descript}>{t('Access_descript')}</span>
        </div>
      </li>
    </ul>
  );
};

export default WhyList;
