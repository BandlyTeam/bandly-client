'use client';
import { useEffect } from 'react';
import Image from "next/image";
import s from "./TopAuthor.module.scss";
import { useAppStore } from '@/store/useAppStore';
import { getTopArtists } from '@/data/mockData';

export default function TopAuthor() {
  const { artists, loadInitialData } = useAppStore();
  useEffect(() => {
    if (artists.length === 0) {
      loadInitialData();
    }
  }, [artists.length]); // Removed loadInitialData from deps to prevent infinite loop

  const topArtist = getTopArtists(1)[0];

  if (!topArtist) {
    return (
      <section className={s.topAuthor}>
        <div className={s.topAuthorWrapper}>
          <div className={s.topAuthorHead}>
            <p className={s.topAuthorHeadText}>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={s.topAuthor}>
      <div className={s.topAuthorWrapper}>
        <div className={s.topAuthorHead}>
          <p className={s.topAuthorHeadText}>
            TOP ARTIST<br />OF MONTH
          </p>
          <h1 className={s.topAuthorHeadName}>{topArtist.name.toUpperCase()}</h1>
          <p className={s.topAuthorGenre}>{topArtist.genre.join(', ')}</p>
          <p className={s.topAuthorLocation}>{topArtist.location}</p>
        </div>
        <div className={s.topAuthorCover}>
          <Image
            className={s.topAuthorCoverImage}
            src={topArtist.avatar}
            alt={`${topArtist.name} cover`}
            priority
            width={230}
            height={230}
          />
        </div>
      </div>
    </section>
  );
}