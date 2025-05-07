"use client";

import s from './MusicListItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import songCover from '@/../public/assets/images/musicPixies.jpg';
import wLike from '@/../public/assets/icons/wLike.svg';
import wLikeFill from '@/../public/assets/icons/wLikeFill.svg';

interface SongData {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  favorite: boolean;
}

interface MusicListItemProps {
  songData: SongData
}

export default function MusicListItem({ songData }: MusicListItemProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);


  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  const formatSongDuration = (duration: number) => {
    return `${Math.floor(duration / 60)}:${String(duration % 60).padStart(2, '0')}`;
  }

  return (
    <div className={s.musicItem}>
      <div className={s.musicItemCover}>
        <Image
          src={songData.cover}
          alt='Song Cover'
          width={50}
          height={50}
          className={s.musicItemCoverImg}
        />
      </div>
      <div className={s.musicItemText}>
        <Link href={"google.com"}>
          <h3 className={s.musicItemTitle}>{songData.title}</h3>
        </Link>

        <Link href={"google.com"}>
          <h4 className={s.musicItemArtist}>{songData.artist}</h4>
        </Link>
      </div>

      <div className={s.musicItemAlbum}>
        <Link href={"google.com"}>
          <p>{songData.album}</p>
        </Link>
      </div>

      <div className={s.like}>
        <button type='button' className={s.likeButton} onClick={handleLikeClick}>
          <Image
            src={isLiked ? wLikeFill : wLike}
            alt='Like'
            width={25}
            height={25}
            className={s.likeIcon}
          />
        </button>
      </div>

      <div className={s.musicItemDuration}>
        <p>{formatSongDuration(songData.duration)}</p>
      </div>
    </div>
  )
}