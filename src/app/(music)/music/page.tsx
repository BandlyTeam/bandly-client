import MusicHero from '@/components/Hero/MusicHero';
import SongsList from '@/components/SongsList/SongsList';
import s from './page.module.scss';
import { Header } from '@/components/Header/Header';

export default function MusicPage() {
  const allSongs = [
    { id: '1', title: 'ZIGHEY', artist: 'GRYGORYI' },
    { id: '2', title: 'YA GEY SYKA', artist: 'DENIS' },
    { id: '3', title: 'YA NE MAX', artist: 'GRYGORYI' },
    { id: '4', title: 'NEW SONG', artist: 'BANDLY' },
    { id: '5', title: 'ROCK STAR', artist: 'DENIS' },
  ];

  const favoriteSongs = [
    { id: '1', title: 'ZIGHEY', artist: 'GRYGORYI' },
    { id: '5', title: 'ROCK STAR', artist: 'DENIS' },
  ];

  return (
    <div className={s.music}>
      <Header hero={<MusicHero />} white={true} />
      
      <main className={s.musicMain}>

      </main>
    </div>
  );
}
