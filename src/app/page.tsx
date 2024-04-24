import Image from 'next/image';
import styles from './page.module.css';
import { baseUrl } from '../../next.config.mjs';
import Filter from './shared/components/Filter/Filter';
import CardCar from './shared/components/CardCar/CardCar';
import dataCar from '../app/shared/components/CardCar/dataCar.json';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.root}>
        <div className={styles.wrap_title}>
          <h1 className={styles.title}>
            Find, book, and rental car in
            <span className={styles.span_title}>
              Easy
              <svg
                className={styles.svg}
                width="137"
                height="13"
                viewBox="0 0 137 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.842868 5.4468L136.512 0.0232306L133.754 2.71257L0.959219 12.2669L0.842868 5.4468Z"
                  fill="#3083FF"
                />
              </svg>
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
          <svg
            className={styles.popular_btn_svg}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 3.99992H1M10.3333 1.33325L13 3.99992L10.3333 1.33325ZM13 3.99992L10.3333 6.66659L13 3.99992Z"
              stroke="#1D1E21"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
    </main>
  );
}
