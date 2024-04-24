import Image from 'next/image';
import style from './cardCar.module.css';
import React from 'react';

interface CarInfo {
  id: string;
  modelCar: string;
  url: string;
  rate: number;
  review: number;
  quantityPass: number;
  typeTransmission: string;
  typeCondition: string;
  quantityDoor: number;
  price: number;
}

interface CarComponentProps {
  car: CarInfo;
}

const CardCar: React.FC<CarComponentProps> = ({ car }) => {
  return (
    <div className={style.wrap}>
      <div className={style.wrap_img}>
        <Image src={car.url} alt="foto red car" width={256} height={163} />
      </div>
      <div className={style.tumbh_card}>
        <div className={style.wrap_rate}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.99996 11.3036L4.87378 12.9137C4.49962 13.1064 4.03684 12.9655 3.84013 12.5989C3.7618 12.453 3.73477 12.2858 3.76323 12.1232L4.36028 8.71286L1.83115 6.29762C1.52845 6.00855 1.52225 5.5338 1.81731 5.23725C1.93481 5.11915 2.08876 5.0423 2.25534 5.01859L5.75051 4.52102L7.3136 1.41816C7.50068 1.04679 7.95963 0.894318 8.33869 1.0776C8.48964 1.15058 8.61182 1.27028 8.68632 1.41816L10.2494 4.52102L13.7446 5.01859C14.1629 5.07814 14.4527 5.45865 14.3919 5.86848C14.3677 6.03168 14.2893 6.18251 14.1688 6.29762L11.6396 8.71286L12.2367 12.1232C12.3081 12.5314 12.0283 12.919 11.6117 12.9891C11.4458 13.0169 11.2751 12.9905 11.1261 12.9137L7.99996 11.3036Z"
              fill="#FFBD3D"
            />
          </svg>
          <span className={style.rate}>{car.rate}</span>
          <span className={style.review}>[{car.review}+ Review]</span>
        </div>
        <h4 className={style.title_card}>{car.modelCar}</h4>
        <ul className={style.descript_list}>
          <li className={style.descript_item}>
            <Image
              src="/img/Profile.png"
              alt="profile foto"
              width={18}
              height={18}
            />
            <span>{car.quantityPass} Passangers</span>
          </li>
          <li className={style.descript_item}>
            <Image
              src="/img/manual.png"
              alt="profile foto"
              width={18}
              height={18}
            />
            <span>{car.typeTransmission}</span>
          </li>
          <li className={style.descript_item}>
            <Image
              src="/img/Cold.png"
              alt="profile foto"
              width={18}
              height={18}
            />
            <span>{car.typeCondition}</span>
          </li>
          <li className={style.descript_item}>
            <Image
              src="/img/Door.png"
              alt="profile foto"
              width={18}
              height={18}
            />
            <span>{car.quantityDoor} Doors</span>
          </li>
        </ul>
      </div>
      <div className={style.price_wrap}>
        <span className={style.price_title}>
          ${car.price}
          <span>/day</span>
        </span>
        <button className={style.btn_rent_now}>
          Rent Now
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 7.99992H2M11.3333 5.33325L14 7.99992L11.3333 5.33325ZM14 7.99992L11.3333 10.6666L14 7.99992Z"
              stroke="#3083FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardCar;
