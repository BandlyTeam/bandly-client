import MusicHero from '@/components/Hero/MusicHero';
import s from './page.module.scss';
import Header from '@/components/Header/Header';
import MusicCard from '@/components/MusicCard/MusicCard';
import musicPixies from '@/../public/assets/images/musicPixies.jpg'
import { pixiesSong } from '@/const/music'

export default function MusicPage() {

  return (
    <div className={s.music}>
      <Header hero={<MusicHero />} white={true} />

      <main className={s.musicMain}>
        <div className={s.musicCardWrapper}>
          <MusicCard song={pixiesSong}/>
        </div>
      </main>
    </div>
  );
}
