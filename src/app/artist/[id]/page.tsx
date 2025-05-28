'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useAppStore, useFavorites, usePlayerActions } from '@/store/useAppStore';
import { getSongsByArtistId, getEventsByArtistId } from '@/data/mockData';
import Header from '@/components/Header/Header';
import EventCard from '@/components/EventCard/EventCard';
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';
import s from './page.module.scss';

export default function ArtistProfilePage() {
  const params = useParams();
  const artistId = params.id as string;
  
  const { artists, loadInitialData } = useAppStore();
  const { followedArtists, toggleFollowArtist } = useFavorites();
  const { playSong } = usePlayerActions();

  useEffect(() => {
    if (artists.length === 0) {
      loadInitialData();
    }
  }, [artists.length]); // Removed loadInitialData from deps to prevent infinite loop

  const artist = artists.find(a => a.id === artistId);
  const songs = getSongsByArtistId(artistId);
  const events = getEventsByArtistId(artistId);
  const isFollowed = followedArtists.includes(artistId);

  if (!artist) {
    return (
      <div className={s.page}>
        <Header white />
        <main className={s.main}>
          <div className={s.notFound}>Artist not found</div>
        </main>
      </div>
    );
  }

  const handlePlaySong = (songIndex: number) => {
    playSong(songs[songIndex]);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={s.page}>
      <Header white />
      
      <div className={s.heroSection}>
        <div className={s.heroBackground}>
          <Image
            src={artist.coverImage}
            alt={artist.name}
            fill
            className={s.backgroundImage}
          />
          <div className={s.heroOverlay} />
        </div>
        
        <div className={s.heroContent}>
          <div className={s.artistAvatar}>
            <Image
              src={artist.avatar}
              alt={artist.name}
              width={200}
              height={200}
              className={s.avatarImage}
            />
          </div>
          
          <div className={s.artistInfo}>
            <div className={s.artistHeader}>
              <h1 className={s.artistName}>{artist.name}</h1>
              {artist.isVerified && (
                <span className={s.verifiedBadge}>✓ Verified</span>
              )}
            </div>
            
            <p className={s.artistGenre}>{artist.genre.join(' • ')}</p>
            <p className={s.artistLocation}>{artist.location}</p>
            
            <div className={s.artistActions}>
              <button
                onClick={() => toggleFollowArtist(artistId)}
                className={`${s.followButton} ${isFollowed ? s.following : ''}`}
              >
                {isFollowed ? 'Following' : 'Follow'}
              </button>
              
              {songs.length > 0 && (
                <button
                  onClick={() => handlePlaySong(0)}
                  className={s.playButton}
                >
                  ▶ Play
                </button>
              )}
            </div>
            
            {artist.socialLinks && (
              <div className={s.socialLinks}>
                {artist.socialLinks.instagram && (
                  <a href={`https://instagram.com/${artist.socialLinks.instagram}`} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                )}
                {artist.socialLinks.youtube && (
                  <a href={`https://youtube.com/${artist.socialLinks.youtube}`} target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                )}
                {artist.socialLinks.spotify && (
                  <a href={`https://open.spotify.com/artist/${artist.socialLinks.spotify}`} target="_blank" rel="noopener noreferrer">
                    Spotify
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <main className={s.main}>
        <div className={s.content}>
          <section className={s.aboutSection}>
            <h2 className={s.sectionTitle}>About</h2>
            <p className={s.bio}>{artist.bio}</p>
            
            {artist.members && artist.members.length > 0 && (
              <div className={s.members}>
                <h3 className={s.membersTitle}>Band Members</h3>
                <div className={s.membersList}>
                  {artist.members.map(member => (
                    <div key={member.id} className={s.member}>
                      <span className={s.memberName}>{member.name}</span>
                      <span className={s.memberRole}>{member.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={s.contactInfo}>
              <h3 className={s.contactTitle}>Contact</h3>
              <p className={s.contactEmail}>{artist.contactEmail}</p>
              {artist.phone && <p className={s.contactPhone}>{artist.phone}</p>}
              {artist.website && (
                <a href={artist.website} target="_blank" rel="noopener noreferrer" className={s.website}>
                  Visit Website
                </a>
              )}
            </div>
          </section>

          {songs.length > 0 && (
            <section className={s.songsSection}>
              <h2 className={s.sectionTitle}>Songs</h2>
              <div className={s.songsList}>
                {songs.map((song, index) => (
                  <div
                    key={song.id}
                    className={s.songItem}
                    onClick={() => handlePlaySong(index)}
                  >
                    <div className={s.songNumber}>{index + 1}</div>
                    <Image
                      src={song.coverImage}
                      alt={song.title}
                      width={48}
                      height={48}
                      className={s.songCover}
                    />
                    <div className={s.songInfo}>
                      <h4 className={s.songTitle}>{song.title}</h4>
                      <p className={s.songMeta}>{song.plays.toLocaleString()} plays</p>
                    </div>
                    <div className={s.songDuration}>{formatDuration(song.duration)}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {events.length > 0 && (
            <section className={s.eventsSection}>
              <h2 className={s.sectionTitle}>Upcoming Events</h2>
              <div className={s.eventsGrid}>
                {events.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <MusicPlayer />
    </div>
  );
}
