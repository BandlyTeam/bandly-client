import { BaseHero } from './BaseHero';
import heroImg from '../../../public/assets/images/hero.png';

export function HomeHero() {
  return (
   <div> <BaseHero
   title="BANDY"
   image={heroImg.src}
   description="Discover and connect with musicians around you"
 /> </div>
  );
} 
