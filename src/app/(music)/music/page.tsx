import { Header } from '@/components/Header/Header';
import { MusicHero } from '@/components/Hero/Hero';
import s from './page.module.scss';

export default function Music() {
  return (
    <div className={s.page}>
    <div className={s.shadow}> 
      <Header hero={  <MusicHero />} />
      <main className={s.main}>
      <div className={s.music}>
        <div className={s.music__container}>
          <div className={s.music__header}>
            <h1 className={s.music__title}>Music</h1>
          </div>
        </div>
      </div>
      </main>
     </div>
    </div>
  );
}
