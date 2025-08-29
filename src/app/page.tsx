import Hero from '@/components/Hero';
import LevelsSection from '@/components/LevelsSection';
import FeaturesSection from '@/components/FeaturesSection';
import MathConceptsSection from '@/components/MathConceptsSection';
import MathApplicationsSection from '@/components/MathApplicationsSection';
import MathHistoryTimeline from '@/components/MathHistoryTimeline';
import ProfessionalMathCases from '@/components/ProfessionalMathCases';

export default function Home() {
  return (
    <main>
      <Hero />
      <LevelsSection />
      <FeaturesSection />
      <MathConceptsSection />
      <MathApplicationsSection />
      <ProfessionalMathCases />
      <MathHistoryTimeline />
    </main>
  );
}
