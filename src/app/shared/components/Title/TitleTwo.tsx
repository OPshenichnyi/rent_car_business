import React from 'react';
import style from './title.module.css';
interface TitleProps {
  title: string;
  titleSection: string;
}
const TitleTwo: React.FC<TitleProps> = ({ title, titleSection }) => {
  return (
    <>
      <h3 className={style.title_section}>{titleSection}</h3>
      <h2 className={style.two}>{title}</h2>
    </>
  );
};

export default TitleTwo;
