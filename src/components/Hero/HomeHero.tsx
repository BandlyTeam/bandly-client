import { BaseHero } from './BaseHero';
import heroImg from '../../../public/assets/images/hero.png';

export function HomeHero() {
  return (
    <BaseHero
      title="BANDY"
      image={heroImg}
      description="Discover and connect with musicians around you"
    />
  );
} 