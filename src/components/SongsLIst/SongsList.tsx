'use client'; 
import Image from "next/image";
import s from "./SongsList.module.scss"; 

interface SongsListProps {
  heartIcon: string;
}

export default function SongsList({ heartIcon }: SongsListProps) {
  return (
    <section className={s.songs}>
      <div className={s.songsList}>
        <div className={s.songsItem}>
          <p className={s.songsItemName}>GRYGORYI - ZIGHEY</p>
          <button className={s.songsItemHeart}>
            <Image src={heartIcon} alt="like" width={24} height={24} />
          </button>
        </div>
        <div className={s.songsItem}>
          <p className={s.songsItemName}>DENIS - YA GEY SYKA</p>
          <button className={s.songsItemHeart}>
            <Image src={heartIcon} alt="like" width={24} height={24} />
          </button>
        </div>
        <div className={s.songsItem}>
          <p className={s.songsItemName}>GRYGORYI - YA NE MAX</p>
          <button className={s.songsItemHeart}>
            <Image src={heartIcon} alt="like" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}