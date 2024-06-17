import Image from 'next/image';
import styles from './page.module.css';
import global from './global.module.css';
import Filter from '../shared/components/Filter/Filter';
import CardCar from '../shared/components/CardCar/CardCar';
import dataCar from '../shared/components/CardCar/dataCar.json';
import Arrow from '../shared/components/icons/Arrow';
import LineDownWords from '../shared/components/icons/LineDownWords';
import { useTranslations } from 'next-intl';
import TitleTwo from '../shared/components/Title/TitleTwo';
import WhyList from '../shared/components/WhyList/WhyList';

export default function Home() {
  const t = useTranslations('Index');
  const m = useTranslations('Popular');
  const why = useTranslations('why_choose');
  return (
    <main className={styles.main}>
      <div className={styles.root}>
        <div className={styles.wrap_title}>
          <h1 className={styles.title}>
            {t('Hero_title')}
            <span className={styles.span_title}>
              Easy
              <LineDownWords className={styles.svg} />
            </span>
            {t('Hero_subTitle')}
          </h1>
          <p>{t('SubTitle')}</p>
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
      <section className={(global.section, styles.popular_section)}>
        <div className={styles.wrap_title_section}>
          <TitleTwo
            titleSection={m('descript_section')}
            title={m('Title_section')}
          />
        </div>

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
          {m('Show_all')}
          <Arrow className={styles.popular_btn_svg} />
        </button>
      </section>
      <section className={styles.why_section}>
        <div className={styles.wrap_section_why}>
          <div className={styles.wrap_img_why}></div>
          <Image
            src="/img/MersedesGrey.png"
            alt="foto car mersedes"
            width={590}
            height={349}
            className={styles.img_why}
          />

          <div className={styles.container_why_descript}>
            <div className={styles.wrap_why_title}>
              <TitleTwo
                titleSection={why('descript_section')}
                title={why('Title_section')}
              />
            </div>
            <WhyList />
          </div>
        </div>
      </section>
    </main>
  );
}
