import s from "./ControlPanel.module.scss";
import Image from "next/image";
import bLike from '@/../public/assets/icons/bLike.svg'
import bPlay from '@/../public/assets/icons/bPlay.svg'
import bNext from '@/../public/assets/icons/bNext.svg'
import bPlus from '@/../public/assets/icons/bPlus.svg'
import wLike from '@/../public/assets/icons/wLike.svg'
import wPlay from '@/../public/assets/icons/wPlay.svg'
import wNext from '@/../public/assets/icons/wNext.svg'
import wPlus from '@/../public/assets/icons/wPlus.svg'

interface ControlPanelProps {
    theme?: 'light' | 'dark';
}

export default function ControlPanel({ theme = 'light' }: ControlPanelProps) {
    const icons = {
        like: theme === 'light' ? bLike : wLike,
        play: theme === 'light' ? bPlay : wPlay,
        next: theme === 'light' ? bNext : wNext,
        plus: theme === 'light' ? bPlus : wPlus
    };

    return (
        <div className={s.control}>
            <div>
                <Image className={s.controlIcon} src={icons.like} alt="Like" width={34} height={34} />
            </div>

            <div className={s.controlPlayer}>
                <Image className={`${s.controlIcon} ${s.controlIconNext}`} src={icons.next} alt="Next" width={28} height={28} />
                <Image className={s.controlIcon} src={icons.play} alt="Play" width={48} height={48} />
                <Image className={s.controlIcon} src={icons.next} alt="Next" width={28} height={28} />
            </div>

            <div>
                <Image className={s.controlIcon} src={icons.plus} alt="Add to playlist" width={34} height={34} />
            </div>
        </div>
    )
}