import s from './Hero.module.scss';
import heroImg from '../../../public/assets/images/hero.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={s.hero}>
    <Image
      src={heroImg}
      alt="Main Art"
      width={800}
      height={600}
      className={s.heroImage}
    />
    <h1 className={s.title}>BANDY</h1>
  </div>
  );
}
