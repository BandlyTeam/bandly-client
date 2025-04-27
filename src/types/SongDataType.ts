import { StaticImageData } from "next/image";

export default interface SongDataType {
    id: string;
    author: string;
    img: StaticImageData;
    songName: string;
}