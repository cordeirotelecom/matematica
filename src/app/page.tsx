import Hero from '@/components/Hero';
import MathInRealLifeSection from '@/components/MathInRealLifeSection';
import LearningJourneySection from '@/components/LearningJourneySection';
import MathConceptsSection from '@/components/MathConceptsSection';
import MathHistorySection from '@/components/MathHistorySection';
import CommunityGameSection from '@/components/CommunityGameSection';
import FeaturesSection from '@/components/FeaturesSection';
import LevelsSection from '@/components/LevelsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <MathInRealLifeSection />
      <LearningJourneySection />
      <MathConceptsSection />
      <MathHistorySection />
      <CommunityGameSection />
      <FeaturesSection />
      <LevelsSection />
      <TestimonialsSection />
    </main>
  );
}
