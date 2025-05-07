import musicPixies from "@/../public/assets/images/musicPixies.jpg";
import SongDataType from "@/types/SongDataType";

const allSongs = [
  { id: "1", title: "ZIGHEY", artist: "GRYGORYI" },
  { id: "2", title: "YA GEY SYKA", artist: "DENIS" },
  { id: "3", title: "YA NE MAX", artist: "GRYGORYI" },
  { id: "4", title: "NEW SONG", artist: "BANDLY" },
  { id: "5", title: "ROCK STAR", artist: "DENIS" },
];

const favoriteSongs = [
  { id: "1", title: "ZIGHEY", artist: "GRYGORYI" },
  { id: "5", title: "ROCK STAR", artist: "DENIS" },
];

export const pixiesSong: SongDataType = {
  id: String(Math.random() * 100000),
  author: "Pixies",
  img: musicPixies,
  songName: "Where is my mind?",
};

export const testSongs = [
  {
    id: 1,
    title: "Where Is My Mind?",
    artist: "Pixies",
    album: "Surfer Rosa",
    duration: 217, // seconds
    cover: "/assets/images/musicPixies.jpg",
    favorite: false,
  },
  {
    id: 2,
    title: "Debaser",
    artist: "Pixies",
    album: "Doolittle",
    duration: 163,
    cover: "/assets/images/musicPixies.jpg",
    favorite: false,
  },
  {
    id: 3,
    title: "Here Comes Your Man",
    artist: "Pixies",
    album: "Doolittle",
    duration: 180,
    cover: "/assets/images/musicPixies.jpg",
    favorite: false,
  },
];
