import musicPixies from '@/../public/assets/images/musicPixies.jpg'
import SongDataType from '@/types/SongDataType';

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

  export const pixiesSong: SongDataType = {
    id: String(Math.random() * 100000),
    author: "Pixies",
    img: musicPixies,
    songName: "Where is my mind?"
  } 