'use client';
import style from './switchLang.module.css';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';
// SwitchLang component for changing the website's language
const SwitchLang = () => {
  // useTransition for optimizing state updates, reducing impact on performance
  const [isPending, startTransition] = useTransition();

  // useRouter hook for handling routing in Next.js
  const router = useRouter();

  // Getting the current locale
  const localActive = useLocale();

  // Event handler for language change
  const onSelectLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value; // Reading the new language from the select element
    router.replace(`/${nextLocale}`); // Change the URL to display the new language without reloading the page
  };

  return (
    <div>
      <select
        className={style.select}
        defaultValue={localActive} // Setting the current language as the default value
        onChange={onSelectLang} // Handling the language change
        disabled={isPending} // Disabling the selector during loading
      >
        <option value="en">EN</option>
        <option value="ua">UA</option>
      </select>
    </div>
  );
};

export default SwitchLang;
