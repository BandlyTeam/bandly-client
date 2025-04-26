import s from './Hero.module.scss';
import musicHeroImg from '../../../public/assets/images/heroMusic.jpg';
import Image from 'next/image';

export default function MusicHero() {
    return (
      <div className={s.musicHero}>
      <Image
        src={musicHeroImg}
        alt="Music Art"
        width={1920}
        height={1080}
        className={s.musicHeroImage}
      />
      <h1 className={`${s.title} ${s.titleMusic}`}>BANDY</h1>
    </div>
    );
  }