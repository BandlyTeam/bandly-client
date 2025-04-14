import s from './page.module.scss';

export default function Music() {
  return (
    <div className={s.music}>
      <div className={s.music__container}>
        <div className={s.music__header}>
          <h1 className={s.music__title}>Music</h1>
        </div>
      </div>
    </div>
  );
}
