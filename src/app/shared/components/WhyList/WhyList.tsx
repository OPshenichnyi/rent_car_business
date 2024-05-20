import Image from 'next/image';
import styles from './whyList.module.css';
import Folder from '../icons/BestPrice';
import Experience from '../icons/Experience';
import BestPrice from '../icons/TwentyFour';
import TechnicalSupport from '../icons/TechnicalSupport';

const WhyList = () => {
  return (
    <ul>
      <li className={styles.item_why}>
        <div className={styles.wrap_img}>
          <Folder />
        </div>
        <div>
          <h3 className={styles.title}>Best price guaranteed</h3>
          <span className={styles.descript}>
            Find a lower price? We’ll refund you 100% of the difference
          </span>
        </div>
      </li>
      <li className={styles.item_why}>
        <div className={styles.wrap_img}>
          <Experience />
        </div>
        <div>
          <h3 className={styles.title}>Experience driver</h3>
          <span className={styles.descript}>
            Find a lower price? We’ll refund you 100% of the difference
          </span>
        </div>
      </li>
      <li className={styles.item_why}>
        <div className={styles.wrap_img}>
          <BestPrice />
        </div>
        <div>
          <h3 className={styles.title}>Best price guaranteed</h3>
          <span className={styles.descript}>
            Find a lower price? We’ll refund you 100% of the difference
          </span>
        </div>
      </li>
      <li className={styles.item_why}>
        <div className={styles.wrap_img}>
          <TechnicalSupport />
        </div>
        <div>
          <h3 className={styles.title}>Best price guaranteed</h3>
          <span className={styles.descript}>
            Find a lower price? We’ll refund you 100% of the difference
          </span>
        </div>
      </li>
    </ul>
  );
};

export default WhyList;
