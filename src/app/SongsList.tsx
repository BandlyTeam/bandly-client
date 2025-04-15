'use client'; 
import heartIcon from "../../public/assets/icons/heart.svg";
import Image from "next/image";
import s from "./SongsList.module.scss"; 

interface SongsListProps {
  heartIcon: string;
}
interface SongsListProps {
    styles: { readonly [key: string]: string };
  }

export default function SongsList({ heartIcon }: SongsListProps) {
  const handleScrollDown = () => {
    const songsList = document.querySelector(`.${s.songsList}`);
    if (songsList) {
      const scrollAmount = 100;
      songsList.scrollTop += scrollAmount;
    }
  };

  return (
    <div className={s.songsScrollContainer}>
      <button className={s.scrollArrow} onClick={handleScrollDown}>
        <div className={s.arrowIcon}></div>
      </button>
      <div className={s.songsList}>
        <div className={s.songItem}>
          <p className={s.songName}>GRYGORYI - ZIGHEY</p>
          <button className={s.heartButton}>
            <Image src={heartIcon} alt="like" width={24} height={24} />
          </button>
        </div>
        <div className={s.songItem}>
          <p className={s.songName}>DENIS - YA GEY SYKA</p>
          <button className={s.heartButton}>
            <Image src={heartIcon} alt="like" width={24} height={24} />
          </button>
        </div>
        {}
      </div>
    </div>
  );
}