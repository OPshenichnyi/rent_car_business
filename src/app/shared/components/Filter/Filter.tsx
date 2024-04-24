'use client';
import style from './filter.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  location: string;
  makeCar: string;
  modelCar: string;
};

const Filter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <form className={style.wrap_input} onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className={style.wrap_filed}>
          <label className={style.label}>LOCATION</label>
          <input
            className={style.input}
            placeholder="Search your location.."
            {...register('location')}
          />
        </div>
        {/* include validation with required or other standard HTML validation rules */}
        <div className={style.wrap_filed}>
          <label className={style.label}>SELECT MODEL CAR</label>
          <input
            className={style.input}
            placeholder="Search your Make.."
            {...register('makeCar', { required: true })}
          />
        </div>
        <div className={style.wrap_filed}>
          <label className={style.label}>SELECT MODEL CAR</label>
          <input
            className={style.input}
            placeholder="Search your Model.."
            {...register('modelCar', { required: true })}
          />
        </div>
        {/* errors will return when field validation fails  */}
        {errors.makeCar && <span>This field is required</span>}
        <input className={style.btn} type="submit" value={'Search'} />
      </form>
    </>
  );
};

export default Filter;
