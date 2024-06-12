'use client';
import style from './switchLang.module.css';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';
import { useLocale } from 'next-intl';
import UaFlags from '../icons/UaFlags';
import EnFlags from '../icons/EnFlags';
// SwitchLang component for changing the website's language
const SwitchLang = () => {
  // useTransition for optimizing state updates, reducing impact on performance
  const [isPending, startTransition] = useTransition();

  // useRouter hook for handling routing in Next.js
  const router = useRouter();

  // Getting the current locale
  const localActive = useLocale();
  const [lang, setLang] = useState(localActive);

  const changeLang = (e: React.MouseEvent<HTMLDivElement>) => {
    const local = e.currentTarget.textContent?.trim().toLowerCase();
    startTransition(() => {
      setLang(`${local}`);
    });

    router.replace(`/${local}`);
  };

  return (
    <div className={style.wrap}>
      <div className={style.wrap_flag}>
        {lang === 'en' ? <EnFlags /> : <UaFlags />}
      </div>
      <div className={style.wrap_lang}>
        <div onClick={changeLang} className={style.container_lang_select}>
          <span>EN</span>
        </div>
        <div className={style.line}></div>
        <div onClick={changeLang} className={style.container_lang_select}>
          <span>UA</span>
        </div>
      </div>
    </div>
  );
};

export default SwitchLang;
