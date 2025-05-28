'use client';
import { useEffect, useState } from 'react';
import { useAppStore, useSearch } from '@/store/useAppStore';
import { Genre } from '@/types';
import ArtistCard from '@/components/ArtistCard/ArtistCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import Header from '@/components/Header/Header';
import s from './page.module.scss';

export default function ArtistsPage() {
  const { artists, loadInitialData, isLoading } = useAppStore();
  const { searchQuery, searchResults, setSearchQuery, performSearch, clearSearch } = useSearch();
  const [selectedGenre, setSelectedGenre] = useState<Genre | 'all'>('all');

  useEffect(() => {
    if (artists.length === 0) {
      loadInitialData();
    }
  }, [artists.length]); // Removed loadInitialData from deps to prevent infinite loop

  useEffect(() => {
    if (searchQuery || selectedGenre !== 'all') {
      performSearch();
    } else {
      clearSearch();
    }
  }, [searchQuery, selectedGenre, performSearch, clearSearch]);

  const displayArtists = searchQuery || selectedGenre !== 'all' 
    ? searchResults.artists 
    : artists;

  const filteredArtists = selectedGenre === 'all' 
    ? displayArtists 
    : displayArtists.filter(artist => artist.genre.includes(selectedGenre as Genre));

  const genres: Genre[] = [
    'Rock', 'Pop', 'Jazz', 'Classical', 'Electronic', 'Hip-Hop', 
    'Country', 'Folk', 'Blues', 'Reggae', 'Punk', 'Metal', 
    'Alternative', 'Indie', 'R&B', 'Soul', 'Funk'
  ];

  if (isLoading) {
    return (
      <div className={s.page}>
        <Header />
        <main className={s.main}>
          <div className={s.loading}>Loading artists...</div>
        </main>
      </div>
    );
  }

  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <div className={s.header}>
          <h1 className={s.title}>Discover Artists</h1>
          <p className={s.subtitle}>Find new music and talented performers</p>
        </div>

        <div className={s.filters}>
          <SearchBar />
          
          <div className={s.genreFilters}>
            <button
              className={`${s.genreButton} ${selectedGenre === 'all' ? s.active : ''}`}
              onClick={() => setSelectedGenre('all')}
            >
              All Genres
            </button>
            {genres.map(genre => (
              <button
                key={genre}
                className={`${s.genreButton} ${selectedGenre === genre ? s.active : ''}`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className={s.artistsGrid}>
          {filteredArtists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className={s.noResults}>
            <h3>No artists found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
}
