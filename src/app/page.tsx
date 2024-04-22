import Image from 'next/image';
import styles from './page.module.css';
import { baseUrl } from '../../next.config.mjs';
import Filter from './shared/components/Filter/Filter';

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
        <Filter />
      </div>
    </main>
  );
}
