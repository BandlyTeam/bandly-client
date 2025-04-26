
import s from './MusicCard.module.css';

interface MusicCardProps {
    width: number;
    height: number
}

export default function MusicCard({ width, height }: MusicCardProps) {

    return (
        <div
            className={s.musicCard} 
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}>
                
        </div>
    )
}
