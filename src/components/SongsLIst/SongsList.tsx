'use client'; 
import { useEffect } from 'react';
import Image from "next/image";
import s from "./SongsList.module.scss"; 
import { useAppStore, usePlayerActions, useFavorites } from '@/store/useAppStore';
import { Song } from '@/types';

interface SongsListProps {
  heartIcon: string;
  limit?: number;
}

export default function SongsList({ heartIcon, limit = 10 }: SongsListProps) {
  const { songs, loadInitialData } = useAppStore();
  const { playSong } = usePlayerActions();
  const { likedSongs, toggleLikeSong } = useFavorites();

  useEffect(() => {
    if (songs.length === 0) {
      loadInitialData();
    }
  }, [songs.length]); // Removed loadInitialData from deps to prevent infinite loop

  const displaySongs = songs.slice(0, limit);

  const handleSongPlay = (song: Song) => {
    playSong(song);
  };

  const handleLikeToggle = (songId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLikeSong(songId);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className={s.songs}>
      <div className={s.songsList}>
        {displaySongs.map((song) => (
          <div 
            key={song.id} 
            className={s.songsItem}
            onClick={() => handleSongPlay(song)}
          >
            <div className={s.songInfo}>
              <Image 
                src={song.coverImage} 
                alt={song.title}
                width={48}
                height={48}
                className={s.songCover}
              />
              <div className={s.songDetails}>
                <p className={s.songsItemName}>{song.title}</p>
                <p className={s.songsItemArtist}>{song.artist.name}</p>
              </div>
            </div>
            <div className={s.songMeta}>
              <span className={s.songDuration}>{formatDuration(song.duration)}</span>
              <span className={s.songPlays}>{song.plays.toLocaleString()} plays</span>
              <button 
                className={`${s.songsItemHeart} ${likedSongs.includes(song.id) ? s.liked : ''}`}
                onClick={(e) => handleLikeToggle(song.id, e)}
              >
                <Image 
                  src={likedSongs.includes(song.id) ? "/assets/icons/wLikeFill.svg" : heartIcon} 
                  alt="like" 
                  width={24} 
                  height={24} 
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}