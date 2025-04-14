import { Header } from '@/components/Header/Header';
import s from './page.module.scss';

export default function Music() {
  return (
    <>
      <Header hero={ 
        <div className={s.music}>
          <div className={s.music__container}>123</div>
        </div>
      }/>
      <div className={s.music}>
        <div className={s.music__container}>
          <div className={s.music__header}>
            <h1 className={s.music__title}>Music</h1>
          </div>
        </div>
      </div>
    </>
  );
}
