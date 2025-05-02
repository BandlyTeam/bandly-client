"use client"

import MusicHero from '@/components/Hero/MusicHero';
import s from './page.module.scss';
import Header from '@/components/Header/Header';
import MusicCard from '@/components/MusicCard/MusicCard';
import musicPixies from '@/../public/assets/images/musicPixies.jpg'
import { pixiesSong } from '@/const/music'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchBar from '@/components/SearchBar/SearchBar';
import FilterBox from '@/components/FilterBox/FilterBox';

// Mock array of songs for the carousel
type SongDataType = typeof pixiesSong;
const songs: SongDataType[] = [
  pixiesSong,
  { ...pixiesSong, id: '2', songName: 'Debaser' },
  { ...pixiesSong, id: '3', songName: 'Here Comes Your Man' },
  { ...pixiesSong, id: '4', songName: 'Gigantic' },
];

export default function MusicPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at once
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '50px', // Adjust as needed for your design
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 2,
    //       centerPadding: '100px'
    //     },
    //   },
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 1,
    //       centerPadding: '0px'
    //     },
    //   },
    // ],
  };

  return (
    <div className={s.music}>
      <Header hero={<MusicHero />} white={true} />

      <main className={s.musicMain}>
        <div style={{ background: 'none', boxShadow: 'none', width: '80vw', height: 'auto', padding: '40px' }}>
          <Slider {...settings}>
            {songs.map((song) => (
              <div className={s.musicCardWrapper} style={{
                height: "500px",
              }} key={song.id}>
                <MusicCard song={song} />
              </div>
            ))}
          </Slider>

          <div className={s.musicMainContent}>

            <div className={s.musicMainContentHeader}>
              <div className={s.searchBarWrapper}>
                <SearchBar />
              </div>
              <div className={s.filterBoxWrapper}>
                <FilterBox
                  options={[
                    { id: '1', label: 'All' },
                    { id: '2', label: 'Pop' },
                    { id: '3', label: 'Rock' },
                    { id: '4', label: 'Jazz' },
                  ]}
                  placeholder="Filter by genre"
                  onFilterChange={(selectedFilter) => console.log(selectedFilter)}
                />
              </div>
            </div>

            <div className={s.musicMainContentList}>
            </div>
          </div>
        </div>

        <p className={s.musicMainBgText}>
          Spicy
        </p>
      </main>
    </div>
  );
}
