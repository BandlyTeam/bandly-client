import s from './Hero.module.scss';
import Image from 'next/image';
import { HeroProps } from './types';

export function BaseHero({ title, image, description }: HeroProps) {
  return (
    <div className={s.hero}>
      <Image
        src={image}
        alt="Hero Image"
        width={800}
        height={600}
        className={s.heroImage}
      />
      <h1 className={s.title}>{title}</h1>
      {description && <p className={s.description}>{description}</p>}
    </div>
  );
} 