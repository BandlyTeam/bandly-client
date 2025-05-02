import Image from 'next/image';
import s from './MusicCard.module.scss';
import Link from 'next/link';
import SongDataType from '@/types/SongDataType';
import ControlPanel from '../ControlPanel/ControlPanel';

interface MusicCardProps {
    song: SongDataType;
}

export default function MusicCard({ song }: MusicCardProps) {
    const {
        id,
        author,
        img,
        songName,
    } = song;

    return (
        <div className={s.musicCard}>
            <div className={s.musicCardCover}>
                <Image
                    src={img}
                    alt="Top song player"
                    className={s.musicCardCoverImage}
                    width={500}
                    height={500}
                />
            </div>

            <div className={s.musicCardName}>
                <p className={s.musicCardNameText}>
                    {songName}
                </p>
                <Link className={s.musicCardNameAuthor} href={"/music"}>
                    {author}
                </Link>
            </div>

            {/* Song duration/progress bar */}
            <div className={s.musicCardDurationLine}>
                <div className={s.musicCardDurationProgress} style={{width: '40%'}} />
                <span className={s.musicCardDurationTime}>1:24</span>
                <span className={s.musicCardDurationTime} style={{justifySelf: 'end'}}>3:45</span>
            </div>

            <div className={s.controlPanelWrapper}>
                <ControlPanel theme={'light'} />
            </div>
        </div>
    )
}
