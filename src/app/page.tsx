import Image from 'next/image';
import styles from './page.module.css';
import Filter from './shared/components/Filter/Filter';
import CardCar from './shared/components/CardCar/CardCar';
import dataCar from '../app/shared/components/CardCar/dataCar.json';
import Arrow from './shared/components/icons/Arrow';
import LineDownWords from './shared/components/icons/LineDownWords';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.root}>
        <div className={styles.wrap_title}>
          <h1 className={styles.title}>
            Find, book, and rental car in
            <span className={styles.span_title}>
              Easy
              <LineDownWords className={styles.svg} />
            </span>{' '}
            steps.
          </h1>
          <p>
            Get a car wherever and whenever you need it with your iOS or Android
            device.
          </p>
        </div>
        <Image
          src="/img/Blue_Mazda.png"
          alt="foto car blu mazda"
          width={690}
          height={514}
        />
        <div className={styles.container}>
          <Filter />
        </div>
      </div>
      <section className={styles.popular_section}>
        <h3 className={styles.popular_descriptio}>Popular rental deals</h3>
        <h2 className={styles.popular_title}>Most popular cars rental deals</h2>
        <ul className={styles.wrap_card}>
          {dataCar.map((carInfo) => {
            return (
              <li key={carInfo.id}>
                <CardCar car={carInfo} />
              </li>
            );
          })}
        </ul>
        <button className={styles.popular_btn}>
          Show All Vehicles
          <Arrow className={styles.popular_btn_svg} />
        </button>
      </section>
    </main>
  );
}
