'use client'; 
import Image from "next/image";
import s from "./SongsList.module.scss"; 

interface SongsListProps {
  heartIcon: string;
  songs?: Array<{
    id: string;
    title: string;
    artist: string;
  }>;
}

export default function SongsList({ heartIcon, songs }: SongsListProps) {
  const defaultSongs = [
    { id: '1', title: 'ZIGHEY', artist: 'GRYGORYI' },
    { id: '2', title: 'YA GEY SYKA', artist: 'DENIS' },
    { id: '3', title: 'YA NE MAX', artist: 'GRYGORYI' },
  ];

  const displaySongs = songs || defaultSongs;

  return (
    <section className={s.songs}>
      <div className={s.songsList}>
        {displaySongs.map((song) => (
          <div key={song.id} className={s.songsItem}>
            <p className={s.songsItemName}>{song.artist} - {song.title}</p>
            <button className={s.songsItemHeart}>
              <Image src={heartIcon} alt="like" width={24} height={24} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}