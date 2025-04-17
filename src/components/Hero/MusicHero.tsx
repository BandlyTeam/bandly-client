import { BaseHero } from './BaseHero';
import heroImg from '../../../public/assets/images/heroMusic.png';

export function MusicHero() {
  return (
   <div> <BaseHero
   image={heroImg.src}
   description="Discover magic in every note"
 /> </div>
  );
} 